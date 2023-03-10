const langFormatter = (textConst, langMode) => {
    newArray = [],
    textConst.map(item => {
        const newItem = {
            id: item.id,
            text: item[langMode].text,
            additional: item[langMode].additional
        }
        newArray.push(newItem)
    })
    return newArray
}