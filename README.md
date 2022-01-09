<div align="center">
    <h1>react-async-button-z</h1>
    <strong>
        <a href="https://www.npmjs.com/package/react-async-button-z">react-async-button-z</a>
    </strong>
    <br />
    <br />
    <a href="https://codesandbox.io/s/hrhss">LIVE EXAMPLE</a>
</div>

---

##### Description
+ Simple lock button.

##### Usage
```js
npm install --save react-async-button-z
```

Import the module in the place you want to use:
```js
import AsyncButton from "react-async-button-z";
import "react-async-button-z/build/styles.css";
```

#### Snippet
```js
    const [isAsync, setAsync] = useState(false)

    const fetchApi() {
        setAsync(true)
        fetch('')....finally(() => setAsync(false))
    }

    <AsyncButton isAsync={isAsync} onClick={fetchApi} text="abcd" />
```

##### Props

| props                | type                          | description                                                                |
|----------------------|-------------------------------|----------------------------------------------------------------------------|
| ....                 |                               |                                                                            |

##### Note

<br />

##### Example
<a href="https://codesandbox.io/s/hrhss">LIVE EXAMPLE</a>

A working example can be found in the `example` directory.

```js
npm install
```
```js
npm run dev
npm run start
```

### License
MIT
