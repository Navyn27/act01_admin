import Review from "../components/Review.jsx";
import Pagination from "../components/pagination.jsx";

const reviews = [
  "My stay at this hotel was nothing short of fantastic! The room was clean, the staff was incredibly friendly and accommodating, and the amenities exceeded my expectations. I enjoyed a peaceful night's sleep and woke up to a delicious breakfast. Highly recommend this place for a comfortable and enjoyable stay.",
  "The dining experience at this restaurant was exceptional. The menu offered a diverse range of dishes, each bursting with flavor. The presentation was top-notch, and the service was impeccable. The ambiance was perfect for a cozy dinner. A must-visit for food enthusiasts looking for a delightful culinary journey!",
  "What a lively atmosphere at the bar! The bartenders were skilled mixologists, and the drink menu was extensive. I tried a few signature cocktails, and each one was a delight to the senses. The bar staff was friendly, and the live music added a fantastic vibe. I'll definitely be returning for more evenings filled with great drinks and good company.",
  "My recent stay at this hotel was simply amazing. The room was spacious and well-appointed, offering stunning views. The attention to detail by the staff was commendable, making me feel truly pampered. The location was convenient, and the amenities, from the pool to the fitness center, were excellent. I had a delightful and relaxing time.",
  "Dining at this restaurant was a culinary delight! The menu featured a perfect blend of local and international flavors. The chef's creativity shone through in every dish. The waitstaff was attentive, and the ambiance was sophisticated yet welcoming. I had a memorable evening, and I can't wait to return for another gastronomic experience.",
  "This bar is a hidden gem! The bartenders not only crafted delicious cocktails but also shared their expertise and recommendations. The bar had a great selection of spirits, and the ambiance was both chic and cozy. Whether you're a cocktail connoisseur or just looking for a casual drink, this place has something for everyone.",
  "I recently hosted an event at this hotel, and the experience was exceptional. The event planning team was professional and accommodating, ensuring every detail was perfect. The meeting facilities were state-of-the-art, and the catering service exceeded expectations. The attendees were impressed, and I attribute the success of the event to the hotel's impeccable service.",
];

const Reviews = () => {
  return (
    <div className="mt-10 float-left ml-52 w-[62rem] h-full grid justify-evenlybg-red-500">
      <Review
        fname="Alfred"
        lname="Binagwaho"
        email="alf.binagwaho@gmail.com"
        review={reviews[0]}
        rating={4}
      />
      <Review
        fname="Daniel"
        lname="Miller"
        email="dan.miller@gmail.com"
        review={reviews[3]}
        rating={3}
      />

      <Review
        fname="Anaïse"
        lname="Kanzayire"
        email="kanzayire.ana@gmail.com"
        review={reviews[5]}
        rating={5}
      />
      <Pagination />
    </div>
  );
};

export default Reviews;
