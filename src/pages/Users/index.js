import React from "react";
import { queryCache } from "react-query";
import { useUsers } from "lib/user-client";
import Fuse from "fuse.js";

import { useUserDetails } from "lib/auth-client";
import { usePageDetails, NonMobileScreen } from "layout/AppLayout";
import Search from "components/Search";

import { PageTitleWrapper, PostsContainer } from "./styles";
import { FollowersUser } from "pages/Profile/Tabs/Followers";
import { PostSkeleton } from "components/loaders.js/SkeletonLoader";

const Users = () => {
  const { pageTitle, setPageTitle } = usePageDetails();
  const { user } = useUserDetails();
  const [usersList, setUserList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const [users, status] = useUsers({
    onSuccess: data => {
      setUserList(data);
    }
  });

  const mutualFollowing =
    queryCache.getQueryData("following")?.map(({ followed }) => followed.id) ?? [];

  React.useLayoutEffect(() => {
    setPageTitle("Users");
    document.title = "Buddy | Users";
  }, [setPageTitle]);

  React.useEffect(() => {
    const fuse = new Fuse(users, {
      keys: ["email", "firstName", "lastName"]
    });

    const searchString = searchTerm.trim();
    const results = fuse.search(searchString).map(({ item }) => item);

    if (results.length > 0) {
      setUserList(results);
    } else {
      setUserList(users);
    }
  }, [searchTerm, users]);

  return (
    <>
      <NonMobileScreen>
        <PageTitleWrapper>
          <p>{pageTitle}</p>
        </PageTitleWrapper>
      </NonMobileScreen>

      <Search
        placeholder="search by email, first or last name"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
      {status === "success" ? (
        <PostsContainer>
          {usersList?.map(eachUser => (
            <FollowersUser
              user={eachUser}
              key={`users-${eachUser.id}`}
              following={mutualFollowing.includes(eachUser.id)}
              disabled={eachUser.id === user.id}
            />
          ))}
        </PostsContainer>
      ) : (
        <PostSkeleton />
      )}
    </>
  );
};

export default Users;
