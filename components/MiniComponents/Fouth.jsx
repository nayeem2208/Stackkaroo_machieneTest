export default function FourthMini() {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="/5ec9a2e7ef3f94384dcee82e279f368d.jpeg"
        className="w-full "
        alt=""
      />
      <h1
        style={{
          color: "#0A56F1",
          position: "absolute",
          top: 50,
          left: "50%",
          transform: "translateX(-50%)",
          lineHeight: "1.5",
        }}
        className="text-3xl font-bold text-center"
      >
        Achieve Customization and <br /> Satisfaction with Stackkaroo's <br />{" "}
        Carefully Crafted Web Solutions
      </h1>
      <h1
        style={{
          position: "absolute",
          top: 200,
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "40%",
        }}
        className="text-gray-700 text-xl font-semibold text-center max-w-2xl mx-auto"
      >
        Consider Stackkaroo's trusted web development services for top-notch and
        cutting-edge web development solutions. Stackkaroo boasts a team of
        highly experienced and skilled web designers and developers who are
        dedicated to delivering high-quality and innovative websites.
      </h1>
      <button
        style={{
          backgroundColor: "#F78319",
          position: "absolute",
          top: 400,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        className="text-white px-4 py-2 rounded-lg text-xl font-bold"
      >
        Connect with our Experts Today!
      </button>
    </div>
  );
}
