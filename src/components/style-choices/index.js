const hairTypes = [
    {
        name:'hair-1',
        content:
            <div className={'flex justify-center'}>
                <div value='hair-1' name="hairType" id="hair-1"  className={'hidden peer'} />
                <label htmlFor={'hair-1'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125  w-20 h-32 overflow-hidden border  transition ease-in-out duration-400 hover:shadow-lg'}>
                    <img src={'hairtype-1.png'}/>
                </label>
            </div>
    },
    {
        name: 'hair-2a',
        content:<div className={'flex justify-center'}>
            <div value='hair-2a' name="hairType" id="hair-2a"  className={'hidden peer'} />
            <label htmlFor={'hair-2a'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125  w-20 h-32 overflow-hidden border  transition ease-in-out duration-400 hover:shadow-lg'}>
                <img src={'hairtype-2a.png'}/>
            </label>
        </div>
    },
    {
        name: 'hair-2b',
        content:<div className={'flex justify-center'}>
            <div value='hair-2b' name="hairType" id="hair-2b"  className={'hidden peer'} />
            <label htmlFor={'hair-2b'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125  w-20 h-32 overflow-hidden border  transition ease-in-out duration-400 hover:shadow-lg'}>
                <img className={'object-cover'} src={'hairtype-2b.png'}/>
            </label>
        </div>
    },
    {
        name: 'hair-2c',
        content:<div className={'flex justify-center'}>
            <div value='hair-2c' name="hairType" id="hair-2c"  className={'hidden peer'} />
            <label htmlFor={'hair-2c'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125  w-20 h-32 overflow-hidden border  transition ease-in-out duration-400 hover:shadow-lg'}>
                <img src={'hairtype-2c.png'}/>
            </label>
        </div>
    },
    {
        name: 'hair-3a',
        content:<div className={'flex justify-center'}>
            <div value='hair-3a' name="hairType" id="hair-3a"  className={'hidden peer'} />
            <label htmlFor={'hair-3a'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125  w-20 h-32 overflow-hidden border  transition ease-in-out duration-400 hover:shadow-lg'}>
                <img src={'hairtype-3a.png'}/>
            </label>
        </div>
    },
    {
        name: 'hair-3b',
        content:<div className={'flex justify-center'}>
            <div value='hair-3b' name="hairType" id="hair-3b"  className={'hidden peer'} />
            <label htmlFor={'hair-3b'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125  w-20 h-32 overflow-hidden border  transition ease-in-out duration-400 hover:shadow-lg'}>
                <img src={'hairtype-3b.png'}/>
            </label>
        </div>
    },
    {
        name: 'hair-3c',
        content:<div className={'flex justify-center'}>
            <div value='hair-3c' name="hairType" id="hair-3c"  className={'hidden peer'} />
            <label htmlFor={'hair-3c'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125  w-20 h-32 overflow-hidden border  transition ease-in-out duration-400 hover:shadow-lg'}>
                <img src={'hairtype-3c.png'}/>
            </label>
        </div>
    },
    {
        name: 'hair-4a',
        content:<div className={'flex justify-center'}>
            <div value='hair-4a' name="hairType" id="hair-4a"  className={'hidden peer'} />
            <label htmlFor={'hair-4a'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125  w-20 h-32 overflow-hidden border  transition ease-in-out duration-400 hover:shadow-lg'}>
                <img src={'hairtype-4a.png'}/>
            </label>
        </div>
    },
    {
        name: 'hair-4b',
        content:<div className={'flex justify-center'}>
            <div value='hair-4b' name="hairType" id="hair-4b"  className={'hidden peer'} />
            <label htmlFor={'hair-4b'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125  w-20 h-32 overflow-hidden border  transition ease-in-out duration-400 hover:shadow-lg'}>
                <img src={'hairtype-4b.png'}/>
            </label>
        </div>
    },
    {
        name: 'hair-4c',
        content:<div className={'flex justify-center'}>
            <div  value='hair-4c' name="hairType" id="hair-4c"  className={'hidden peer'} />
            <label htmlFor={'hair-4c'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125  w-20 h-32 overflow-hidden border  transition ease-in-out duration-4s00 hover:shadow-lg'}>
                <img src={'hairtype-4c.png'}/>
            </label>
        </div>
    },
]

const styles = [
    {
        name:'shave',
        content:<label htmlFor={'shave'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={' flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'object-cover'} src={'bald.png'}/>
            </div>
            <div value='shave' name="preset" id="shave"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Shave
            </div>
        </label>
    },
    {
        name:'trim',
        content:<label htmlFor={'trim'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={' flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'w-16 object-cover'} src={'scissors.png'}/>
            </div>
            <div value='trim' name="preset" id="trim"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Trim
            </div>
        </label>
    },
    {
        name:'fade',
        content:<label htmlFor={'fade'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={'p-2  flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'object-cover'} src={'fade.png'}/>
            </div>
            <div value='fade' name="preset" id="fade"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Fade
            </div>
        </label>
    },
    {
        name:'trim + fade',
        content:<label htmlFor={'trim + fade'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={'p-2  grid grid-cols-2 justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'w-10 ml-2 object-cover'} src={'scissors.png'}/>
                <img className={'object-cover'} src={'fade.png'}/>
            </div>
            <div value='trim + fade' name="preset" id="trim + fade"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Trim + Fade
            </div>
        </label>
    },
    {
        name: 'Remove Bulk',
        content:<label htmlFor={'Remove Bulk'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={' flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'object-fill h-full'} src={'remove-bulk.png'}/>
            </div>
            <div value='Remove Bulk' name="Remove Bulk" id="Remove Bulk"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Remove bulk
            </div>
        </label>
    },
    {
        name: 'layer',
        content:<label htmlFor={'layer'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={' flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={' object-cover'} src={'layered-hair.png'}/>
            </div>
            <div value='layer' name="layer" id="layer"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Layer
            </div>
        </label>
    },
    {
        name: 'blend',
        content:<label htmlFor={'blend'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={' flex justify-center items-end w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={' object-cover scale-125 ml-6 mb-4'} src={'blend.png'}/>
            </div>
            <div value='blend' name="blend" id="blend"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Blend
            </div>
        </label>
    },
    {
        name: 'comb-over',
        content:<label htmlFor={'comb-over'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={'p-2  flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'object-cover'} src={'fade.png'}/>
            </div>
            <div value='comb-over' name="trimStyle" id="comb-over"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Comb-over
            </div>
        </label>
    },
    {
        name: 'part',
        content:<label htmlFor={'part'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={'p-2  flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'p-4 object-cover'} src={'midpart.png'}/>
            </div>
            <div value='part' name="trimStyle" id="part"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Part
            </div>
        </label>
    },
    {
        name: 'manbun',
        content:<label htmlFor={'manbun'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={'p-2  flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'p-1 ml-2 object-cover'} src={'manbun.png'}/>
            </div>
            <div value='manbun' name="trimStyle" id="manbun"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Manbun
            </div>
        </label>
    },
    {
        name: 'low-fade',
        content:<label htmlFor={'low-fade'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={' flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'object-cover grayscale'} src={'low-fade.png'}/>
            </div>
            <div value='low-fade' name="fadeType" id="low-fade"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Low Fade
            </div>
        </label>
    },
    {
        name: 'mid-fade',
        content:<label htmlFor={'mid-fade'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={' flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={' object-cover grayscale'} src={'mid-fade.png'}/>
            </div>
            <div value='mid-fade' name="fadeType" id="mid-fade"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Mid Fade
            </div>
        </label>
    },
    {
        name: 'high-fade',
        content:<label htmlFor={'high-fade'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={'  flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'object-cover grayscale'} src={'high-fade.png'}/>
            </div>
            <div value='high-fade' name="fadeType" id="high-fade"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                High Fade
            </div>
        </label>
    },
    {
        name: 'taper',
        content:<label htmlFor={'taper'} className={' transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
            <div className={'  flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                <img className={'object-cover grayscale'} src={'taper.png'} alt={null}/>
            </div>
            <div value='taper' name="fadeType" id="taper"  className={'hidden peer'} />
            <div className={'bg-[#ECB984] peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                Taper
            </div>
        </label>
    },
]



export default function StyleChoices(props){
    return (
        <div>
            <div className={' mt-4 gap-10 flex justify-center flex-wrap'}>
                {styles.map((style) => {
                    if(style.name === props.styleSettings.preset){
                        return <div key={style.name}>
                            {style.content}
                        </div>
                    }
                })}

                {styles.map((style) => {
                    if(style.name === props.styleSettings.trimSet.trimStyle){
                        return <div key={style.name}>
                            {style.content}
                        </div>
                    }
                })}

                {styles.map((style) => {
                    if(props.styleSettings.trimSet.trimTypes.includes(style.name)){
                        return <div key={style.name}>
                            {style.content}
                        </div>
                    }
                })}

                {styles.map((style) => {
                    if(style.name === props.styleSettings.fadeType){
                        return <div key={style.name}>
                            {style.content}
                        </div>
                    }
                })}
            </div>
        </div>
    )
}