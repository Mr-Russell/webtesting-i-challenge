const enhancer = require('./enhancer.js');

// test away!


describe('Succeed Function', ()=>{
  
  it('When "enhancement" is less than 20, enhancement is increased by 1', ()=>{
    const weakItem = {
      name: 'weakItem', 
      durability: 90, 
      enhancement: 5
    }

    const enhancedItem = {
      name: 'weakItem', 
      durability: 90, 
      enhancement: 6
    }
    
    expect(enhancer.succeed(weakItem)).toEqual(enhancedItem)


    const strongItem = {
      name: 'weakItem', 
      durability: 90, 
      enhancement: 19
    }

    const enhancedStrongItem = {
      name: 'weakItem', 
      durability: 90, 
      enhancement: 20
    }
    
    expect(enhancer.succeed(strongItem)).toEqual(enhancedStrongItem)
  })

  it('When "enhancement" equals 20, the item is returned unchanged', ()=>{
    const maxEnhanced = {
      name: 'weakItem', 
      durability: 90, 
      enhancement: 20
    }

    expect(enhancer.succeed(maxEnhanced)).toEqual(maxEnhanced)
  })
})

describe('Fail Function', ()=>{

  it('When "enhancement" is less than 15, "durability" is decreased by 5', ()=>{
    const durable = {
      name: 'weakItem', 
      durability: 95, 
      enhancement: 14
    }

    const lessDurable = {
      name: 'weakItem', 
      durability: 90, 
      enhancement: 14
    }
    
    expect(enhancer.fail(durable)).toEqual(lessDurable)


    const fragile = {
      name: 'weakItem', 
      durability: 2, 
      enhancement: 14
    }

    const zeroDurability = {
      name: 'weakItem', 
      durability: 0, 
      enhancement: 14
    }

    expect(enhancer.fail(fragile)).toEqual(zeroDurability)
  })

  it('When "enhancement" is 15 or 16, "durability" is decreased by 10', ()=>{
    const fifteen = {
      name: 'weakItem', 
      durability: 95, 
      enhancement: 15
    }
    
    const fifteenFail = {
      name: 'weakItem', 
      durability: 85, 
      enhancement: 15
    }
    
    expect(enhancer.fail(fifteen)).toEqual(fifteenFail)



    const sixteen = {
      name: 'weakItem', 
      durability: 99, 
      enhancement: 16
    }

    const sixteenFail = {
      name: 'weakItem', 
      durability: 89, 
      enhancement: 16
    }

    expect(enhancer.fail(sixteen)).toEqual(sixteenFail)



    const notDurable = {
      name: 'weakItem', 
      durability: 8, 
      enhancement: 15
    }

    const durabilityZero = {
      name: 'weakItem', 
      durability: 0, 
      enhancement: 15
    }

    expect(enhancer.fail(notDurable)).toEqual(durabilityZero)
  })

  it('When "enhancement" is greater than 16, "durability" is decreased by 10 AND "enhancement" is decreased by 1', ()=>{
    const enhanced = {
      name: 'weakItem', 
      durability: 95, 
      enhancement: 18
    }

    const enhancedFail = {
      name: 'weakItem', 
      durability: 85, 
      enhancement: 17
    }

    expect(enhancer.fail(enhanced)).toEqual(enhancedFail)



    const enhancedFragile = {
      name: 'weakItem', 
      durability: 8, 
      enhancement: 17
    }

    const fragileFail = {
      name: 'weakItem', 
      durability: 0, 
      enhancement: 16
    }

    expect(enhancer.fail(enhancedFragile)).toEqual(fragileFail)
  })
})

describe('Repair Function', ()=>{
  it('"Durability" is restored to 100', ()=>{
    const randomItem = {
      name: 'weakItem', 
      durability: 0, 
      enhancement: 16
    }
    const repairedItem = {
      name: 'weakItem', 
      durability: 100, 
      enhancement: 16
    }
  
    expect(enhancer.repair(randomItem)).toEqual(repairedItem)
  })
})

describe('Get Function', ()=>{
  it('When "enhancement is greater than 0, the "enhancement" value is added to item name', ()=>{
    const randomItem = {
      name: 'weakItem', 
      durability: 100, 
      enhancement: 16
    }
    const enhancedItem = {
      name: '[+16] weakItem', 
      durability: 100, 
      enhancement: 16
    }

    expect(enhancer.get(randomItem)).toEqual(enhancedItem)



    const nonEnhanced = {
      name: 'weakItem', 
      durability: 100, 
      enhancement: 0
    }
  
    expect(enhancer.get(nonEnhanced)).toEqual(nonEnhanced)
  })
})