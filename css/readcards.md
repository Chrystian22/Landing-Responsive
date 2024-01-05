@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');

:root {
    --Raleway: 'Raleway', sans-serif;
    --Playfair: 'Playfair Display', serif;
    --color-green: #4BA87D;
    --color-black: #000;
}

.top-categories{
    border: yellow solid;
    font-family: var(--Raleway);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -4rem;
    margin-bottom: 3rem;
}

.container-categories{
    border: #000 solid;
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.card-category{
    width: 100%;
    max-width: 300px;
    min-width: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.3s ease;
    cursor: pointer;
    z-index: 5;
}
.card-category:hover{
    transform: scale(1.1);
}

.card-category .name{
    color: #fff;
    font-weight: 900;
    padding-top: 8rem;
    padding-right: 13rem;
}
.card-category p{
    color: #fff;
    font-weight: 700;
    padding-right: 8rem;
}

.category-one{
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(../assets/img/photo.webp);
}
.category-two{
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(../assets/img/photo-1.webp);
}
.category-three{
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(../assets/img/photo-2.webp);
}

@media (max-width:768px) {
    .top-categories{
        margin-top: -7rem;
        margin-bottom: 3rem;
    }
    
    .container-categories{
        width: 95%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
    
    .card-category{
        height: 9rem;
    }
    .card-category:hover{
        transform: scale(1.05);
    }
    .card-category .name{
        color: #fff;
        font-weight: 900;
        padding-top: 5rem;
        padding-right: 7rem;
    }
    .card-category p{
        font-size: .8rem;
        font-weight: 500;
        padding-right: 4rem;
    }

}
@media (max-width:430px) {
    .top-categories{
        font-family: var(--Raleway);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -7rem;
        margin-bottom: 3rem;
    }
    
    .container-categories{
        width: 70%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .card-category{
        height: 12rem;
    }
    
    .card-category .name{
        padding-top: 6rem;
        padding-right: 8rem;
        font-size: 2rem;
    }
    .card-category p{
        padding-right: 8rem;
    }

}