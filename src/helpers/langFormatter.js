const langFormatter = (textConst, langMode) => {
    let newArray = []
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

export default langFormatter