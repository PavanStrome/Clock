function Thing2() {
   let time = new Date();
  return <div className="current-time">
  <p class="lead">this is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
  </p>
 </div>
}

export default Thing2;
