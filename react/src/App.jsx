// import { useState, useEffect } from "react";
// export default function App() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount((c) => c + 1);
//     // setCount(c + 1);
//   }
//   return (
//     <div>
//       <Counter count={count} />
//       <button onClick={increase}>Increase Count</button>
//     </div>
//   );
// }
// function Counter(props) {
//   useEffect(function () {
//     console.log("mount");
//     return function () {
//       console.log("unmount");
//     };
//   }, []);

//   useEffect(
//     function () {
//       console.log("count has changed");
//     },
//     [props.count]
//   );

//   return <div>Counter {props.count}</div>;
// }

function App() {
  return (
    <div
      style={{
        background: "#dfe6e9",
        height: "100vh",
      }}
    >
      <Greeting name={"tanishi"} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponent
              name={"tani"}
              followerCount={20}
              time={"2m ago"}
              image={
                "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
              }
              description={
                "Want to know how to win big? Check out how these folks won $6000 in bounties."
              }
            />
            <br />
          </div>
          <div>
            <PostComponent
              name={"tanishi"}
              followerCount={30}
              time={"3m ago"}
              image={
                "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
              }
              description={
                "How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed to get a job."
              }
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
};

function PostComponent({ name, followerCount, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{followerCount} Followers</div>
          <div>{time}</div>
        </div>
      </div>
      <div style={{ fontSize: 12 }}>{description}</div>
    </div>
  );
}

function ProfileCard() {
  return <div></div>;
}

export default App;
