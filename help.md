nav component

<nav className="main-nav">
<ul>
<li>Home</li>
<li>Articles</li>
<li>About</li>
<li>Contact</li>
</ul>
</nav>

JSX: regular html code, that we write inside return.
To return multiple lines, use ()
 
Must have one root element. If u don't have, enter empty tags called fragments.

return (
    <>
    <h1> welcome </h1>
    <h1> this is test </h1>
);
We cannot use class for css styling. Reserved keyword in javascript. So we use className.
