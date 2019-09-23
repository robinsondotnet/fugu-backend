module.exports = {
    getClassName(wtf) {
        const nodeType = wtf.constructor.name;
        if (nodeType === 'Object') {
            throw Error('The object must be a instance of a class');
        }

        return nodeType;
    },
    splitJoin(wtf, preffix) {
        return Object.keys(wtf)
            .map(w => `${preffix}.${w} = $${w}`)
            .join(' ,')
    }
}
