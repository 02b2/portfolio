import { isVariableDeclarationList } from "typescript";

export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      dexcription: "Title of skill",
      type: 'string',
    },
    {
      name: 'progres',
      title: 'Progres',
      type: 'number',
      desription: "progress of skill from 0 to 100",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },


  ],

}
