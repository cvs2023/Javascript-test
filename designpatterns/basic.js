/*

//1
I think that most of design patterns needs to be repaginated when we are in the javascript context. Most of the cases the language can solve some sort of problems in a more simpler way. In the singleton example, you can just export a object with all the required methods in it, and then you can import at any level, on any component because the js module system will not load it twice, so you won't have 2 instances of the same module. 

If you don't want that kind of behavior, you can use a factory, so instead of exporting an object with methods within, you can export a function so you have to call it in order to get a new instance of something.

//2
if you are using either commonjs (node-style) or esm/mjs (module) patterns, you can simply have your variable, constructor/class and export the method to retrieve or instantiate the singleton...

//3
I'm finding it difficult to understand Singleton. But from my understanding, the same below could already served the purpose.

const x = {}

function Singleton(){
    return x;
}

module.exports = Singleton;


* invoking new or calling the Singleton() itself will just return the same object. So singleton, isn't that right? After all, why bother with al the complexity when we could all understand it this way

//4
First of all I appreciate the work you've done, the explanation is great! Thx!
But you've written useless lines of code. 
As you reassign pManager twice.
It's simply should be:

const Singleton = (function(){
  let pManager

  function ProcessManager() { }

  return {
    getProcessManager: () =>
    {
      if(!pManager)
        pManager = new ProcessManager()
      return pManager
    }
  }
})()


Sage.. I feel like I'm using Singleton way too much.. Basicly everytime I have a class with some kind of "state" I always make it a Singleton because I want to access the same data instance everywhere.

Does this sound like bad design/arquitecture or is this common to happen?



@DevSage
1 year ago
I think that singletons should be used if you need to access the data instance from various separate parts of your program (different modules/files).

For example, if you were in Node.js and you wanted to add a logging module as a singleton, that would be alright because multiple files in your project would all rely on that one shared resource. 

But if you're trying to use a singleton in a very small project (only 1 or a few files), it might not be worth all the hassle.
*/
