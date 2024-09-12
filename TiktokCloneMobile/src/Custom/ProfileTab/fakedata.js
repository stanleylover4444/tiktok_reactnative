import React from 'react';
import { View, Text } from 'react-native';



export const videos = [
  {
    id: '1',
    avatauploader : "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/438262853_1742302276298837_5600512035682884669_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGP9k0sdJQyPrv5FV94vWfIEv0NCF-QbHUS_Q0IX5BsdfV55XG0iIWPqap5qrQOU0zlDglrDkFOAvl-kVIYB3iP&_nc_ohc=QaH5k9ZBrgIQ7kNvgHtltxn&_nc_ht=scontent.fhan3-2.fna&_nc_gid=AXr504K_IZO7YDF79kGglzU&oh=00_AYAhmpsYdxDGFW2ZbgL-5tMDacyZh0cH5KxIK8OoZtWd1Q&oe=66DF1AC3", thum: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/453655690_1045840767166192_8472071150410146987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGAdd_EylMbgzbO2aXIik_v7EL6xDLaeC_sQvrEMtp4Ny3f3tgunCJdy3TQ5t1QpY5rQCI0hYI6IgegyMZfF8c&_nc_ohc=1KBz9uYI6BQQ7kNvgFxJdfr&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=AmL6KaAjXzmzeTHVhN_1w0a&oh=00_AYDzRzXdKnYaVoiQ6HNN8LC1lKc91CBkVYhRISDDJ04clw&oe=66DF237F',
    uri: require('../../assets/video/1.mp4'),
    uploader: 'Tiểu Mẫn',
    likes: 100240,
    comments: 223,
    saves: 22,
    caption: 'This is a great video!',
    share : 32
  },
  {
    id: '2',
    avatauploader : "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/393163714_1223154742406239_5819914150349568577_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGzQU-ko_xVn5vSaciZF6Va_N-AAl5q0TP834ACXmrRM7ETw6zRHQhrG8V8pMD1W59aMJK9-GPCE-qxoYVmBwvr&_nc_ohc=cx4fYtkzwwcQ7kNvgHSQWjv&_nc_ht=scontent.fsgn1-1.fna&_nc_gid=AFm7p8EpwjoDxx3dwz0qXC8&oh=00_AYArcE2Fc-jlRBMojussU_IoPm8hmkjUOyZDCbandUmn_w&oe=66E5FC1E",
    thum: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/453655690_1045840767166192_8472071150410146987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGAdd_EylMbgzbO2aXIik_v7EL6xDLaeC_sQvrEMtp4Ny3f3tgunCJdy3TQ5t1QpY5rQCI0hYI6IgegyMZfF8c&_nc_ohc=1KBz9uYI6BQQ7kNvgFxJdfr&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=AmL6KaAjXzmzeTHVhN_1w0a&oh=00_AYDzRzXdKnYaVoiQ6HNN8LC1lKc91CBkVYhRISDDJ04clw&oe=66DF237F',
    uri: require('../../assets/video/2.mp4'),
    uploader: 'Tường Vi',
    likes: 2200,
    comments: 30,
    saves: 602,
    caption: 'Check out this amazing content!',
    share : 40
  },
  {
    id: '3',
    avatauploader : "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/455185526_788522980160999_6151211156977030904_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEzebvpjJH0fk6UHleBTS8b-6DU0CCCZ2T7oNTQIIJnZP53EmGXhT68lKI92oT06d8D1kKyhNaA4iqxzbzAt63J&_nc_ohc=LBnldxvDe-4Q7kNvgEzJtAf&_nc_ht=scontent.fsgn1-1.fna&_nc_gid=A_zlKO5fnXDXZ4gSvYfvRdv&oh=00_AYCmQTeB4niYD1CK9eKTXYWZ0i7j3Pa6p_hime2kaD7WVQ&oe=66E5FAD4",
    thum: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/453655690_1045840767166192_8472071150410146987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGAdd_EylMbgzbO2aXIik_v7EL6xDLaeC_sQvrEMtp4Ny3f3tgunCJdy3TQ5t1QpY5rQCI0hYI6IgegyMZfF8c&_nc_ohc=1KBz9uYI6BQQ7kNvgFxJdfr&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=AmL6KaAjXzmzeTHVhN_1w0a&oh=00_AYDzRzXdKnYaVoiQ6HNN8LC1lKc91CBkVYhRISDDJ04clw&oe=66DF237F',
    uri: require('../../assets/video/3.mp4'),
    uploader: 'Bé yêu',
    likes: 1490,
    comments: 3023,
    saves: 10,
    caption: 'Check out this amazing content!',
    share : 40
  },
 
];

const FakeDataVideo = () => {

  
};

export default FakeDataVideo;
