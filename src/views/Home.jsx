import React from 'react'
import Header from '../components/Header';
import Template from '../Template';

function Home() {
  return (
    <>
        <Header />
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item)=>
                        <div class="col mb-5">
                            <div class="card h-100">
                                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">Fancy Product</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </>
  )
}

export default Template(Home);