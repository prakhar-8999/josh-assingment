import {Button, Form, Input, InputNumber, message, Modal} from "antd";
import {useEffect, useState} from "react";
import instance from "../../axios";
import SkillsCard from "./SkillsCard";

const skillsArray = Array.from({length: 5}, (_, i) => i);

const SkillsAndLanguage = () => {
  const [skills, setSkills] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();

  const getSkills = () => {
    instance
      .get("skills")
      .then((res) => setSkills(res.data))
      .catch((err) => console.log(err));
  };

  const onFinish = (values) => {
    console.log(values);
    const postData = {
      title: values.domain,
      id: skills.length + 1,
      tech: skillsArray
        .map((_, index) => ({
          techName: values[`skill${index}`],
          percent: values[`prof${index}`],
        }))
        .filter((e) => e.techName !== undefined && e.techName !== ""),
    };
    console.log(postData);
    instance
      .post("skills", postData)
      .then((res) => {
        console.log(res);
        message.success("Skill Inserted Successfully!");
        form.resetFields();
        getSkills();
        setIsOpen(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      <div className="mt-36">
        <p className="text-center text-5xl pt-12 font-bold">
          Skills & Langauges
        </p>
        <div className="text-gray-500">
          <p className="text-center mt-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
          </p>
          <p className="text-center">
            do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
          <p className="text-center">lorem ipsum</p>
        </div>
      </div>
      <div className="mx-8 sm:mx-36 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 ">
          {skills.map((each, index) => (
            <div key={index}>
              <SkillsCard {...each} />
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mt-16 bg-primary font-medium rounded-lg text-md px-8 py-4 me-2 mb-2"
        >
          ADD SKILL
        </button>
      </div>
      <Modal
        style={{top: 20}}
        open={isOpen}
        okButtonProps={{className: "hidden"}}
        cancelButtonProps={{className: "hidden"}}
        closeIcon={false}
        width={800}
      >
        <p className="text-5xl font-semibold text-center">Add Skill</p>
        <Form name="basic" onFinish={onFinish} form={form}>
          <div className="my-6">
            <label
              htmlFor="domain"
              className="block mb-2 ml-1 text-xl font-medium"
            >
              Domain
            </label>
            <Form.Item
              name="domain"
              rules={[{required: true, message: "Please input domain!"}]}
            >
              <Input
                type="text"
                placeholder="Front End Developer"
                className="block w-full p-5 border-none text-gray-900 rounded-lg !bg-gray-200 hover:!bg-gray-200 text-base"
              />
            </Form.Item>
          </div>
          <p className="block mb-2 ml-1 text-xl font-medium">Skills</p>
          <div className="flex gap-x-5">
            <div className="w-[80%]">
              <p className="ml-1 text-lg mb-2">Skills</p>
              {skillsArray.map((_, index) => (
                <Form.Item
                  name={`skill${index}`}
                  key={index}
                  className="mb-5"
                  rules={[
                    {
                      required: index === 0,
                      message: "At least 1 skill is required!",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    className="block border-none border-0 w-full p-5 text-gray-900 rounded-lg !bg-gray-200 hover:!bg-gray-200 text-base"
                  />
                </Form.Item>
              ))}
            </div>
            <div className="w-[20%]">
              <p className="text-lg mb-2">Proficiency (%)</p>
              {skillsArray.map((_, index) => (
                <Form.Item
                  name={`prof${index}`}
                  key={index}
                  className="mb-[19px]"
                  rules={[
                    {
                      required: index === 0,
                      message: "Enter Proficiency",
                    },
                  ]}
                >
                  <InputNumber
                    type="text"
                    min={0}
                    max={100}
                    className="block border-none border-0 w-full p-4 text-gray-900 rounded-lg !bg-gray-200 hover:!bg-gray-200 text-base"
                  />
                </Form.Item>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <div className="flex gap-x-6">
              <Button
                type="button"
                htmlType="submit"
                className="bg-primary font-semibold rounded-lg text-md !px-8 !py-7 !me-2 mb-2"
              >
                <span className="!my-4">ADD SKILL</span>
              </Button>
              <Button
                // htm
                onClick={() => {
                  setIsOpen(false);
                  form.resetFields();
                }}
                className="bg-white !text-red-500 rounded-lg font-semibold px-8 py-7 me-2 mb-2 border !border-red-500"
              >
                CANCEL
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default SkillsAndLanguage;
