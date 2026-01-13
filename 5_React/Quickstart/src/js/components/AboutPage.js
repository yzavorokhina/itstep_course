import Button from "./Button";

function AboutPage(){
    let content = {
        title: "About",
        text: "This is a page with info about our company."
    }

    let styles = {
        textAlign: 'center',
        backgroundColor: 'pink'
    }

    return (
        <>
          <h1>{content.title}</h1>
          <p>{content.text}</p>
          {/* <p>{content.text + "???"}</p> */}
          {/* <p style={styles}>{`${content.text}`}</p> */}
          <Button />
        </>
      );
}

export default AboutPage;