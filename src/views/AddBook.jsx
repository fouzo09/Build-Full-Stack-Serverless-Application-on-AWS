import React from 'react'
import Template from '../Template'

function AddBook() {
  return (
        <section class="py-5" style={{minHeight: '550px'}}>
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row justify-content-center">
                    <div className="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form action="" method='post'>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group mb-2">
                                                <label htmlFor="#">Titre du livre</label>
                                                <input type="text" className='form-control' name="titre" id="titre" />
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="#">Auteur(s)</label>
                                                <input type="text" className='form-control' name="titre" id="titre" />
                                            </div>
                                            <div className="form-group">
                                                <button className='btn btn-dark' type="submit">Partager</button>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group mb-2">
                                                <label htmlFor="#">Telecharger le fichier</label>
                                                <input type="file" className='form-control' name="titre" id="titre" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="#">Mot cles</label>
                                                <input type="text" className='form-control' name="titre" id="titre" />
                                            </div>
                                        </div>
                                    </div>
                               </form>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
  )
}

export default Template(AddBook)