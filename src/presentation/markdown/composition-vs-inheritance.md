# Composition vs. Inheritance

> **Inheritance** is when you design your types around **what they are**.
> **Composition** is when you design your types around **what they do**.

### The limitations of inheritance

Let's say we need to implement a `Dog` and a `Cat` class.
Dogs `bark`, cats `meow`.

```js
dog.bark();
cat.meow();
```

But now we want to implement the `eat` method for both dogs and cats.
To not create duplicate code, we create an `Animal` class. `Dog` and `Cat` will extend it.

```js
animal.eat();
---  dog.bark();
---  cat.moew();
```

Next we need a robot that will feed the animals:

```js
feedingRobot.drive().feed();
```

but also a cleaning robot:

```js
cleaningRobot.drive().clean();
```

We should create a `Robot` class. `FeedingRobot` and `CleaningRobot` will extend it.

```js
robot.drive();

--- feedingRobot.feed();
--- cleaningRobot.clean();
```

One month later we found out that our client wants a `CleaningRobotDog`,
which can `bark`, `drive` and `clean`, but since it is a robot, it doesn't need
to `eat`.

We could create something like an `AnimalRobot` which inherits both from
`Animal` and `Robot` but it will have a lot of functionality that it actualy doesn't need.

>
> This is like asking for a banana and getting a gorilla holding a banana.

### Composition to the rescue

Let's describe our entities by what they do:

```js
dog = eat + bark;
cat = eat + meow;
feedingRobot = drive + clean;
cleaningRobot = drive + clean;
cleaningRobotDog = drive + clean + bark;
```

Code it using `functions`, `classes` and `prototype`.
