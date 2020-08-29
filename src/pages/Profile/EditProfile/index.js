import React from "react";
import { useUserDetails } from "lib/user-client";

const EditProfile = () => {
  const { user } = useUserDetails();

  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias molestiae dolorem,
      accusamus rerum amet vitae blanditiis quos provident natus? Consequuntur deleniti atque
      similique architecto earum reprehenderit modi, tempora optio, recusandae qui reiciendis
      tempore itaque maiores, sunt odit nam ipsam sequi. Excepturi autem aperiam suscipit dolorem
      maxime, repellat labore dolore modi necessitatibus, nihil doloremque voluptatibus similique
      eveniet placeat alias molestias atque quisquam amet. Voluptate perspiciatis obcaecati ipsum
      deserunt quasi amet consectetur molestias, iure doloribus nesciunt fugiat officia cumque
      repellendus, quis praesentium possimus modi harum vitae minus rerum, quisquam eaque explicabo?
      Rem eum praesentium magnam a facere provident adipisci nesciunt tempora id, voluptatem
      consequuntur tempore velit rerum dolores atque omnis exercitationem quaerat eaque, cum
      perspiciatis quasi aut maiores. Dolores dolor ea accusamus optio odio at omnis. Corrupti,
      possimus consectetur ad ipsam inventore delectus, aperiam voluptatibus illo totam blanditiis
      sed alias praesentium beatae architecto. Est doloremque reiciendis magni eius provident nisi
      sit id incidunt minima architecto, quod at molestiae voluptates similique dolorem, asperiores
      hic cupiditate, eaque rem nulla beatae in illum. Praesentium non reiciendis itaque inventore
      dolor fugit ducimus labore similique quaerat architecto expedita nobis vero dolorum officiis
      voluptates repellendus illo facere quidem, optio quas doloremque laboriosam necessitatibus
      nemo fuga. Maxime, odio.
    </p>
  );
};

export default EditProfile;
