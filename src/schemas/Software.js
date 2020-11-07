import Mongoose, { model } from 'mongoose';

const schema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    url_icon: {
      type: String,
    },
    compatible_os: [
      {
        type: String,
        required: true,
      },
    ],
    access_link: [
      {
        os: {
          type: String,
          required: true,
        },
        direct_download: {
          type: String,
        },
        version: {
          type: String,
        },
        size: {
          type: Number,
          require: true,
        }
      },
    ],
    command_download: {
        os: {
          type: String,
          enum: ['linux', 'chocolatey'],
        },
        command: {
          type: String,
        },
        version: {
          type: String,
        },
        size: {
          type: Number,
        },
    },

    category: {
      type: String,
      required: true,
    },
    url_page: {
      type: String,
    },
    linked_layers: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

export default model('software', schema);
