import EntityCard from './entity-card'
import { useState } from 'react'

export default function PlayerCard() {
	const [health, setHealth] = useState<number>(25)
    
    return (
		<div className='player'>
			<div className='health'>
				Health: <span>{health}</span>
			</div>
			<div className='entities'>
				{[1, 2, 3, 4].map((entityNumber: number) => (
					<>
						<EntityCard entityNumber={entityNumber} key={Date.now()} />
					</>
				))}
			</div>
			<button onClick={() => { setHealth(health => health - 1) }} className='player_minus'>
				Decrease player health
			</button>
		</div>
	)
}
