import { useState } from 'react'

export default function EntityCard({ entityNumber }: { entityNumber: number }) {

    const [ATK, setATK] = useState<number>(2)
    const [DEF, setDEF] = useState<number>(2)

    function increaseATK() {
        setATK(ATK => ATK + 1)
    }

    function increaseDEF() {
        setDEF(DEF => DEF + 1)
    }

    function decreaseATK() {
        setATK(ATK => ATK - 1)
    }

    function decreaseDEF() {
        setDEF(DEF => DEF - 1)
    }

	return (
		<div className='entity'>
			<h3>{`Entity ${entityNumber}`}</h3>
			<label>Attack:</label>
			<div className='custom-input'>
				<button onClick={decreaseATK}>-</button>
				<input value={ATK} onChange={(e) => { setATK(parseInt(e.target.value)) }} />
				<button onClick={increaseATK}>+</button>
			</div>
			<label>Health:</label>
			<div className='custom-input'>
                <button onClick={decreaseDEF}>-</button>
                <input value={DEF} onChange={(e) => { setDEF(parseInt(e.target.value)) }} />
                <button onClick={increaseDEF}>+</button>
            </div>
		</div>
	)
}
