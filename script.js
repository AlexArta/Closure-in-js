// Функция для создания простого счетчика
function createSimpleCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

// Функция для создания счетчика с шагом
function createStepCounter(step = 1) {
    let count = 0;
    
    return {
        increment: function() {
            count += step;
            return count;
        },
        decrement: function() {
            count -= step;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

// Функция для создания счетчика с ограничением
function createLimitedCounter(limit) {
    let count = 0;
    
    return {
        increment: function() {
            if (count < limit) {
                count++;
            }
            return count;
        },
        decrement: function() {
            if (count > 0) {
                count--;
            }
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

// Создаем и отображаем счетчики
function setupCounters() {
    const countersContainer = document.getElementById('counters');
    
    // Простой счетчик
    const simpleCounter = createSimpleCounter();
    const simpleCounterDiv = createCounterUI('Simple Counter', simpleCounter);
    countersContainer.appendChild(simpleCounterDiv);
    
    // Счетчик с шагом 2
    const stepCounter = createStepCounter(2);
    const stepCounterDiv = createCounterUI('Step Counter (step: 2)', stepCounter);
    countersContainer.appendChild(stepCounterDiv);
    
    // Счетчик с ограничением
    const limitedCounter = createLimitedCounter(5);
    const limitedCounterDiv = createCounterUI('Limited Counter (max: 5)', limitedCounter);
    countersContainer.appendChild(limitedCounterDiv);
}

// Функция для создания UI счетчика
function createCounterUI(title, counter) {
    const div = document.createElement('div');
    div.className = 'counter';
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    div.appendChild(titleElement);
    
    const countDisplay = document.createElement('p');
    countDisplay.textContent = `Count: ${counter.getCount()}`;
    div.appendChild(countDisplay);
    
    const incrementBtn = document.createElement('button');
    incrementBtn.textContent = 'Increment';
    incrementBtn.onclick = function() {
        counter.increment();
        countDisplay.textContent = `Count: ${counter.getCount()}`;
    };
    div.appendChild(incrementBtn);
    
    const decrementBtn = document.createElement('button');
    decrementBtn.textContent = 'Decrement';
    decrementBtn.onclick = function() {
        counter.decrement();
        countDisplay.textContent = `Count: ${counter.getCount()}`;
    };
    div.appendChild(decrementBtn);
    
    return div;
}

// Инициализация при загрузке страницы
window.onload = setupCounters; 