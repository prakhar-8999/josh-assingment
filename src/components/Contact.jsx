import {Button, Form, Input, message} from "antd";
import {useEffect, useState} from "react";
import instance from "../../axios";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import mobile from "../assets/mobile.png";
import yellowCircle from "../assets/yellowCircle.png";

const {TextArea} = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [contacts, setContacts] = useState([]);

  const onFinish = (values) => {
    const postData = {id: contacts.length + 1, ...values};
    instance
      .post("contacts", postData)
      .then(() => {
        message.success("Contact Saved Successfully!");
        form.resetFields();
        getContacts();
      })
      .catch((err) => console.log(err));
  };

  const getContacts = () => {
    instance
      .get("contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="mx-5 sm:mx-36 mt-36">
        <div className="flex-col sm:flex-row sm:flex gap-5">
          <div className="w-full sm:w-[65%]">
            <p className="font-semibold text-3xl sm:text-4xl">
              Leave ME your info
            </p>
            <Form name="basic" onFinish={onFinish} form={form}>
              <div className="bg-white p-4 sm:p-12 mt-12">
                <div className="my-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xl font-medium text-gray-500"
                  >
                    Your Full Name ( Required)
                  </label>
                  <Form.Item
                    name="name"
                    rules={[{required: true, message: "Please input Name!"}]}
                  >
                    <Input
                      type="text"
                      className="block w-full p-4 text-gray-900 rounded-lg !bg-gray-200 hover:!bg-gray-200 text-base"
                    />
                  </Form.Item>
                </div>
                <div className="my-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xl font-medium text-gray-500"
                  >
                    Your Email ( Required)
                  </label>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please input Email!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="block w-full p-4 text-gray-900 rounded-lg !bg-gray-200 hover:!bg-gray-200 text-base"
                    />
                  </Form.Item>
                </div>
                <div className="my-6">
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-xl font-medium text-gray-500"
                  >
                    Subject
                  </label>
                  <Form.Item
                    name="subject"
                    rules={[{required: true, message: "Please input Subject!"}]}
                  >
                    <Input
                      id="subject"
                      className="block w-full p-4 text-gray-900 rounded-lg !bg-gray-200 hover:!bg-gray-200 text-base"
                    />
                  </Form.Item>
                </div>
                <div className="my-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-xl font-medium text-gray-500"
                  >
                    Your Message
                  </label>
                  <Form.Item
                    name="message"
                    rules={[{required: true, message: "Please input Message!"}]}
                  >
                    <TextArea
                      rows={6}
                      className="block w-full p-4 text-gray-900 rounded-lg !bg-gray-200 hover:!bg-gray-200 text-base"
                    />
                  </Form.Item>
                </div>
                <div className="my-6">
                  <Button
                    type="button"
                    htmlType="submit"
                    className="bg-primary rounded-md text-md font-medium px-5 py-7 me-2 mb-2"
                  >
                    <p className="flex gap-x-2">SEND MESSAGE</p>
                  </Button>
                </div>
              </div>
            </Form>
          </div>
          <div className="w-full sm:w-[35%] mt-16 sm:mt-0">
            <p className="font-semibold text-3xl sm:text-4xl">
              Contact information
            </p>
            <div className="bg-white mt-12">
              <div className="flex justify-center">
                <div className="relative my-8">
                  <img src={yellowCircle} alt="yellowCircle" />
                  <img
                    className="absolute top-[30%] left-[27%]"
                    src={location}
                    alt="location"
                  />
                </div>
              </div>
              <div className="flex justify-between mx-3 sm:mx-12 mb-4">
                <p className="text-xl font-semibold text-gray-400">Country:</p>
                <p className="text-md font-normal mt-1 text-gray-600">
                  Bangladesh
                </p>
              </div>
              <div className="flex justify-between mx-3 sm:mx-12 mb-4">
                <p className="text-xl font-semibold text-gray-400">City:</p>
                <p className="text-md font-normal mt-1 text-gray-600">Dhaka</p>
              </div>
              <div className="flex justify-between mx-3 sm:mx-12 pb-4">
                <p className="text-xl font-semibold text-gray-400">Streat:</p>
                <p className="text-md font-normal mt-1 text-gray-600">
                  35 vhatara, Badda
                </p>
              </div>
            </div>
            <div className="bg-white mt-12">
              <div className="flex justify-center">
                <div className="relative my-8">
                  <img src={yellowCircle} alt="yellowCircle" />
                  <img
                    className="absolute top-[30%] left-[27%]"
                    src={mail}
                    alt="location"
                  />
                </div>
              </div>
              <div className="flex justify-between mx-3 sm:mx-12 mb-4">
                <p className="text-xl font-semibold text-gray-400">Email:</p>
                <p className="text-md font-normal mt-1 text-gray-600">
                  youremail@gmail.com
                </p>
              </div>
              <div className="flex justify-between mx-3 sm:mx-12 mb-4">
                <p className="text-xl font-semibold text-gray-400">Skype:</p>
                <p className="text-md font-normal mt-1 text-gray-600">
                  @yourusername
                </p>
              </div>
              <div className="flex justify-between mx-3 sm:mx-12 pb-4">
                <p className="text-xl font-semibold text-gray-400">Telegram:</p>
                <p className="text-md font-normal mt-1 text-gray-600">
                  @yourusername
                </p>
              </div>
            </div>
            <div className="bg-white mt-12">
              <div className="flex justify-center">
                <div className="relative my-8">
                  <img src={yellowCircle} alt="yellowCircle" />
                  <img
                    className="absolute top-[30%] left-[27%]"
                    src={mobile}
                    alt="location"
                  />
                </div>
              </div>
              <div className="flex justify-between mx-3 sm:mx-12 mb-4">
                <p className="text-xl font-semibold text-gray-400">
                  Support services:
                </p>
                <p className="text-md font-normal mt-1 text-gray-600">15369</p>
              </div>
              <div className="flex justify-between mx-3 sm:mx-12 mb-4">
                <p className="text-xl font-semibold text-gray-400">Office:</p>
                <p className="text-md font-normal mt-1 text-gray-600">
                  +58 (021)356 587 235
                </p>
              </div>
              <div className="flex justify-between mx-3 sm:mx-12 pb-4">
                <p className="text-xl font-semibold text-gray-400">Personal:</p>
                <p className="text-md font-normal mt-1 text-gray-600">
                  +58 (021)356 587 235
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
