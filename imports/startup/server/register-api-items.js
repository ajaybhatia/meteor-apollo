import { Meteor } from "meteor/meteor";
import Items from "../../api/items/items";

function insertLink(name) {
  Items.insert({ name, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Items collection is empty, add some data.
  if (Items.find().count() === 0) {
    insertLink("Do the Tutorial");

    insertLink("Follow the Guide");

    insertLink("Read the Docs");

    insertLink("Discussions");
  }
});
