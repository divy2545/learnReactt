function Title() {
    let name="divyansh";
    return (
    <div>
        <h1>this is the title</h1>
        <h3>this is the description</h3>
        <p>Hi, {name.toUpperCase()}</p>
    </div>
    )
  }

  // default export

export default Title;


//  named export

// export {Title};