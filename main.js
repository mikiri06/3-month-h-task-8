const func = async () => {
	console.log('Start')

	await new Promise(resolve => setTimeout(resolve, 100)).then(() =>
		console.log('timer 100ms')
	)

	await new Promise(resolve => setTimeout(resolve, 0)).then(() =>
		console.log('timer 0ms')
	)

	const value = await new Promise(resolve => {
		setTimeout(() => {
			resolve('Promise completed')
		}, 0)
	})
	console.log(value)

	console.log('End')
}

func()
