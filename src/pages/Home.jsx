import  { useEffect, useState } from "react";
import CardItem from "../components/CardItem";

const Home = () => {
    const articles = [
          {
            "id": 1,
            "title": "Healthy Eating Habits",
            "description": "Discover tips to maintain a healthy diet.",
            "image": "/images/beverage.webp"
          },
          {
            "id": 2,
            "title": "Quick & Easy Recipes",
            "description": "Fast recipes for busy lifestyles.",
            "image": "/images/coffee.webp"
          },
          {
            "id": 3,
            "title": "Top 10 Superfoods",
            "description": "Boost your diet with these superfoods.",
            "image": "/images/food.webp"
          },
          {
            "id": 1,
            "title": "Healthy Eating Habits",
            "description": "Discover tips to maintain a healthy diet.",
            "image": "/images/beverage.webp"
          },
          {
            "id": 2,
            "title": "Quick & Easy Recipes",
            "description": "Fast recipes for busy lifestyles.",
            "image": "/images/coffee.webp"
          },
          {
            "id": 3,
            "title": "Top 10 Superfoods",
            "description": "Boost your diet with these superfoods.",
            "image": "/images/food.webp"
          },
          {
            "id": 1,
            "title": "Healthy Eating Habits",
            "description": "Discover tips to maintain a healthy diet.",
            "image": "/images/beverage.webp"
          },
          {
            "id": 2,
            "title": "Quick & Easy Recipes",
            "description": "Fast recipes for busy lifestyles.",
            "image": "/images/coffee.webp"
          },
          {
            "id": 3,
            "title": "Top 10 Superfoods",
            "description": "Boost your diet with these superfoods.",
            "image": "/images/food.webp"
          },
          {
            "id": 1,
            "title": "Healthy Eating Habits",
            "description": "Discover tips to maintain a healthy diet.",
            "image": "/images/beverage.webp"
          },
          {
            "id": 2,
            "title": "Quick & Easy Recipes",
            "description": "Fast recipes for busy lifestyles.",
            "image": "/images/coffee.webp"
          },
          {
            "id": 3,
            "title": "Top 10 Superfoods",
            "description": "Boost your diet with these superfoods.",
            "image": "/images/food.webp"
          }
        ]
      

  return (
    <div className="bg-[#3a6fa4]">
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {articles.map((article) => (
          <CardItem
            key={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
