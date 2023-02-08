const paramRegx = /^\[[a-zA-Z]+\]$/g;

const optionalParamRegx = /^\[[a-zA-Z]+\$\]$/g;

const paramContentRegx = /[a-zA-Z]+/g;

const excludeRegx = /_(.*)\.\w+/g;

const modulesFiles = require.context("./", true, /\.tsx$/);

const tryToParam = (input) => {
    if (new RegExp(paramRegx).test(input)) {
        return `:${input.match(paramContentRegx)}`;
    } else if (new RegExp(optionalParamRegx).test(input)) {
        return `:${input.match(paramContentRegx)}?`;
    }
    return input;
};

const tryToName = (input) => {
    const matched =
        new RegExp(paramRegx).test(input) ||
        new RegExp(optionalParamRegx).test(input)
            ? `${input.match(paramContentRegx)}`
            : input;

    return matched.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    });
};

const modules = modulesFiles
    .keys()
    .filter((path) => !new RegExp(excludeRegx).test(path))
    .reduce((modules, modulePath) => {
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");

        const paths = moduleName.split("/");
        modules.push({
            name: paths.map((item) => tryToName(item)).join(""),
            path: `/${paths.map((item) => tryToParam(item)).join("/")}`,
            component: () => import(`./${moduleName}`),
            props: (route) => ({ ...route.query, ...route.params }),
        });
        return modules;
    }, []);

// console.log(modules)

export default modules;
