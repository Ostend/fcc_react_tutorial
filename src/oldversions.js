/* function Booklist() {
  return (
    <React.Fragment>
      <section>
        <BookTitle />
        <BookTitle />
      </section>
      <ImageSection />
    </React.Fragment>
  );
}
const BookTitle = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col">
            <Image />
            <Title />
            <Author />
          </div>
          <div className="col">
            <Image />
            <Title />
            <Author />
          </div>
          <div className="col">
            <Image />
            <Title />
            <Author />
          </div>
        </div>
      </section>
    </>
  );
};
const Image = () => (
  <>
    <img
      className="bookImg"
      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="book image"
      width="200px"
      height="150px"
    />
  </>
);
function ImageSection() {
  return (
    <>
      <section className="container">
        <section className="row">
          <div className="col-sm-6">
            <img
              className="mainImage"
              src="https://images.unsplash.com/photo-1613410882144-27458728538b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="col-sm-6">
            <img
              className="sideImage"
              src="https://images.unsplash.com/photo-1613390074156-6f25c7779885?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </section>
      </section>
    </>
  );
}

const Author = () => <h5 id="authorName">NK Jemison</h5>;
const Title = () => <h4>The Fifth Season</h4>;
ReactDom.render(<Booklist />, document.getElementById("root")); */

/* const TwoImages = () => (
  <>
    <section className="container">
      <div className="rowImage">
        <MainImage />
        <SideImage />
      </div>
    </section>
  </>
);
const MainImage = () => (
  <img
    className="mainImage"
    src="https://images.unsplash.com/photo-1613410882144-27458728538b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  />
);
const SideImage = () => (
  <img
    src="https://images.unsplash.com/photo-1613390074156-6f25c7779885?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    className="sideImage"
  />
); */


//Version 1 book list, each element is defined
/* function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>)
}

const Book = () => {
  return <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
}
const Image = () => <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
const Author = () => <h5 style={{ color: "#617d98", marginTop: ".25rem" }}>NK Jemison</h5>;
const Title = () => <h4>The Fifth Season</h4>;
ReactDom.render(<BookList />, document.getElementById("root")); */

//version 2 booklist

//set up variables 
//This example uses object to pass data to components/
/* const firstBook = {
  img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  title: "The Fifth Season",
  author: "NK Jemison"
}
const secondBook = {
  img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591856088l/53922305.jpg",
  title: "Honey Girl",
  author: "Morgan Rogers"
} */
/* const title = "";   OLD VERSION OF THE PROPS
const author = "";
const img = ""; */
/* const Book = ({ img, title, author, /* children */ //}) => { //destructring the props object here instead
//const { img, title, author } = props; Destructing the object to send data through it
/*   return (
    <article className="book">
      <img src={img} />
      <h4>{title}</h4>
      <h5>{author}</h5>
      {/* {children} *///}

//  </article> 
// )
//} 