import React from "react";
import { Image, Tabs, TabList, TabPanels, Tab, TabPanel, useDisclosure } from "@chakra-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import { queryCache, useMutation } from "react-query";
// import { updateUser } from "lib/user-client";
import { useMediaQuery } from "react-responsive";
import "react-circular-progressbar/dist/styles.css";

import { useUserDetails } from "lib/user-client";

import Modal from "components/Modal";
import Following from "./Tabs/Following";
import Followers from "./Tabs/Followers";
import Likes from "./Tabs/Likes";
import Posts from "./Tabs/Posts";

import { usePageDetails, NonMobileScreen } from "layout/AppLayout";
import maleFB from "assets/male-fb.svg";
import femaleFB from "assets/female-fb.svg";
import colors from "styles/colors";

import {
  ProfileContainer,
  ProfileImageWrapper,
  BioContainer,
  NameWrapper,
  ConnectionStats,
  EditButton,
  TabContainer,
  TabWrapper
} from "./styles";
import EditProfile from "./EditProfile";

const tabOptions = [
  { label: "Posts", content: Posts },
  { label: "Likes", content: Likes },
  { label: "Following", content: Following },
  { label: "Followers", content: Followers }
];

// const user = {
//   progress: 60,
//   firstName: "Ekezie",
//   lastName: "David",
//   following: 2,
//   followers: 1670,
//   posts: ["hello world", "whats popping"],
//   bio:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure quae nostrum ipsam neque soluta aperiam."
// };

const Profile = () => {
  const { setPageTitle } = usePageDetails();
  const focusRef = React.useRef();
  const { user } = useUserDetails();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [progressValue, stetProgressValue] = React.useState(0);

  // const [mutate, { status, error }] = useMutation();

  // controls the animation delay for prfile progress bar
  React.useEffect(() => {
    function updateProfileProgress() {
      return setTimeout(() => {
        stetProgressValue(user?.progress ?? 0);
      }, 200);
    }
    updateProfileProgress();
  }, [user]);

  React.useLayoutEffect(() => {
    setPageTitle("Profile");
    document.title = "Buddy | Profile";
  }, [setPageTitle]);

  const isTablet = useMediaQuery({
    query: "(min-width: 768px)"
  });

  return (
    <ProfileContainer>
      <EditButton onClick={onOpen}>Edit</EditButton>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        overlayClose={false}
        title="Edit Profile"
        size={{ base: "80%", tablet: "55%", laptop: "530px" }}
        scrollBehavior={isTablet ? "inside" : "outside"}
        initialFocusRef={focusRef}
      >
        <EditProfile onClose={onClose} focusRef={focusRef} />
      </Modal>

      <ProfileImageWrapper>
        <CircularProgressbar
          value={progressValue}
          className="progress"
          strokeWidth={3}
          styles={buildStyles({
            pathColor: `${colors.primary}`
          })}
        />
        <Image
          rounded="full"
          src={user?.photo}
          fallbackSrc={user?.gender === "female" ? femaleFB : maleFB}
        />
        <NonMobileScreen>
          <div className="progress-stat">
            <p>{progressValue}%</p>
          </div>
        </NonMobileScreen>
      </ProfileImageWrapper>

      <BioContainer>
        <NameWrapper>{`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}</NameWrapper>
        <p>{user?.bio}</p>
        <ConnectionStats>
          <p>
            <span>{user?.following ?? 0}</span> following
          </p>
          <p>
            <span>{user?.followers ?? 0}</span> followers
          </p>
        </ConnectionStats>
      </BioContainer>

      <TabContainer>
        <Tabs isFitted>
          <TabList>
            {tabOptions.map((tab, i) => (
              <Tab
                key={i}
                p="0.5rem"
                color="buddy.blue"
                textAlign="start"
                whiteSpace="nowrap"
                w="100%"
                mx={isTablet ? "auto" : ""}
                fontSize={isTablet ? "1.6rem" : "1.3rem"}
                justifyContent="center"
                flex={isTablet ? "" : "1"}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {tabOptions.map(({ content: Component }, i) => (
              <TabPanel key={i}>
                <TabWrapper>
                  <Component user={user} />
                </TabWrapper>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </TabContainer>
    </ProfileContainer>
  );
};

export default Profile;
