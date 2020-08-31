import React from "react";
import { Image, Box } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { queryCache, useMutation } from "react-query";

import { editProfileSchema } from "utils/validationSchema";
import { useUserDetails, updateUser } from "lib/user-client";

import { FaCamera } from "react-icons/fa";
import maleFB from "assets/male-fb.svg";
import femaleFB from "assets/female-fb.svg";
import Button from "components/Button";
import { ShowError } from "components/ShowError/ShowError";
import TextInput from "components/TextInput";
import SelectInput from "components/TextInput/SelectInput";
import { Spinner } from "components/loaders.js";
import { FieldsContainer } from "./styles.js";
import useCustomToast from "hooks/useCustomToast";

import {
  ProfileContentContainer,
  ProfileImageContainer,
  Tip,
  ProfileImageWrapper,
  NameContainer
} from "./styles";
import TextArea from "components/TextInput/TextArea.js";

const genderArr = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" }
];

// const user = {
//   progress: 60,
//   firstName: "victory",
//   lastName: "joseph",
//   email: "victoryasokomeh@gmail.com",
//   following: 2,
//   gender: "male",
//   followers: 1670,
//   posts: ["hello world", "whats popping"],
//   bio:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure quae nostrum ipsam neque soluta aperiam."
// };

const EditProfile = ({ onClose }) => {
  const { user } = useUserDetails();
  const { doToast } = useCustomToast();
  const [mutate, { status, error }] = useMutation(updateUser);

  const initialValues = {
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    gender: user?.gender ?? "",
    bio: user?.bio ?? ""
    // mobile: user?.phone_number ?? "",
  };

  async function handleSubmit(values) {
    await mutate(values, {
      onSuccess: async () => {
        await queryCache.invalidateQueries("user");
        doToast("Success", "Profile succesfully updated!");
        onClose();
      }
    });
  }

  return (
    <ProfileContentContainer>
      <ProfileImageContainer>
        <Tip>
          <h4>Upload Profile image</h4>
        </Tip>
        <ProfileImageWrapper>
          <label htmlFor="upload-img">
            {/* <input
              type="file"
              id="upload-img"
              name="user-image"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            /> */}

            <Image
              size="100px"
              rounded="full"
              src={user?.image}
              alt={`${user?.first_name} ${user?.last_name}`}
              aria-label="upload profile image"
              fallbackSrc={user?.gender === "female" ? femaleFB : maleFB}
            />

            <div className="icon">
              <Box size="28px" as={FaCamera} color="rgba(255, 255, 255, 0.8)" />
            </div>
          </label>
        </ProfileImageWrapper>
      </ProfileImageContainer>

      <Formik
        initialValues={initialValues}
        validationSchema={editProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <FieldsContainer>
              <NameContainer>
                <TextInput name="firstName" placeholder="david" label="First name" />
                <TextInput name="lastName" placeholder="ekezie" label="Last name" />
              </NameContainer>

              <TextInput
                name="email"
                type="email"
                placeholder="ekeziedavid@gmail.com"
                label="Email Address"
              />

              <SelectInput
                name="gender"
                label="Gender"
                options={genderArr}
                placeholder="Select gender"
              />

              <TextArea name="bio" placeholder="No long yarns..." label="Bio" />

              <ShowError
                status={status}
                error={error === "Invalid credentials" ? "email or password incorrect" : error}
              />
              <Button type="submit" disabled={status === "loading" || isSubmitting || !isValid}>
                {status === "loading" || isSubmitting ? <Spinner /> : "Save"}
              </Button>
            </FieldsContainer>
          </Form>
        )}
      </Formik>
    </ProfileContentContainer>
  );
};

export default EditProfile;
