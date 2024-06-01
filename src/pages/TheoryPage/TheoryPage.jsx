import React from 'react';
import './TheoryPage.css';
import {Accordion, Alert, Badge, Card} from "react-bootstrap";

import waterfallImg from "../../assets/img/waterfall_model.png";
import spiralImg from "../../assets/img/spiral_model.png";

export default function TheoryPage() {

    return (
        <div className="theory-page">
            <div style={{
                display: "flex",
                width: "100%",
            }}>
                <a href="/" className="home-btn">
                    <i style={{fontSize: "10vh", alignSelf: "flex-start", color: "var(--green)"}} className="bi bi-house-door"></i>
                </a>
                <h1 style={{textAlign: "center", width: "100%"}}>
                    ΑΠΟ ΤΟΝ ΑΛΓΟΡΙΘΜΟ <br/>
                    <strong style={{color: "var(--red)"}}>ΣΤΗΝ ΑΝΑΠΤΥΞΗ ΠΡΟΓΡΑΜΜΑΤΟΣ</strong>
                </h1>
            </div>

            <section className="theory-content">

                <div className="theory-content-section">
                    <h2>
                        Στόχοι του Κεφαλαίου
                    </h2>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em"
                    }}>
                        Στο κεφάλαιο αυτό θα μελετήσουμε την πορεία από τον αλγόριθμο στο πρόγραμμα.
                        Μετά τη μελέτη του κεφαλαίου θα μπορούμε να:
                        <ul>
                            <li>περιγράφουμε την πορεία από τον αλγόριθμο στο πρόγραμμα</li>
                            <li>επεξηγούμε τη λογική συγγραφής προγραμμάτων ανά είδος προγραμματισμού
                                (Διαδικαστικός, Αντικειμενοστρεφής και Συναρτησιακός προγραμματισμός).</li>
                        </ul>

                        <strong>Λέξεις Κλειδιά</strong>

                        <div>
                            <Badge bg="dark">
                                κύκλος ανάπτυξης προγράμματος
                            </Badge>
                            &nbsp;
                            <Badge bg="dark">
                                μοντέλα ανάπτυξης λογισμικού
                            </Badge>
                            &nbsp;
                            <Badge bg="dark">
                                προγραμματιστικά υποδείγματα
                            </Badge>
                            &nbsp;
                            <Badge bg="dark">
                                πρότυπα και τεχνικές προγραμματισμού
                            </Badge>
                            &nbsp;
                            <Badge bg="dark">
                                γλώσσες προγραμματισμού
                            </Badge>
                        </div>
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h2 style={{marginTop: "1em"}}>
                        1. Κύκλος ανάπτυξης προγράμματος/λογισμικού
                    </h2>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0"
                    }}>
                        Η διαδικασία ανάπτυξης λογισμικού αποτελεί μια εργασία που εξελίσσεται σε διακριτές φάσεις ή στάδια και θεωρείται υποσύνολο του κύκλου ζωής ενός συστήματος
                        Λογισμικού που ξεκινά από την ανάλυση απαιτήσεων και τελειώνει με την παύση
                        λειτουργίας του. <br/> <br/>

                        Μεταξύ των βασικών μεθοδολογιών (μοντέλων) -που έχουν προταθεί και ακολουθούνται- είναι το μοντέλο του Καταρράκτη (Waterfall model) και αυτό της Σπειροειδούς προσέγγισης (Spiral model)
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h3 style={{marginTop: "1em"}}>
                        1.1 Μοντέλο του καταρράκτη
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0",
                        width: "100%"
                    }}>
                        Πρόκειται για το μοντέλο που υποδιαιρεί τη διαδικασία ανάπτυξης ενός συστήματος
                        λογισμικού στις ακόλουθες φάσεις:
                        <ul>
                            <li>Ανάλυση απαιτήσεων</li>
                            <li>Σχεδίαση</li>
                            <li>Υλοποίηση</li>
                            <li>Ολοκλήρωση</li>
                            <li>Λειτουργία και συντήρηση</li>
                        </ul>

                        <img src={waterfallImg} alt="Waterfall Model" style={{width: "50vw"}}/>
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h3 style={{marginTop: "1em"}}>
                        1.2 Μοντέλο σπείρας
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0"
                    }}>
                        Στο μοντέλο της σπείρας, η ανάπτυξη ακολουθεί μια εξελικτική διαδικασία με την
                        επαναληπτική εκτέλεση ενός κύκλου φάσεων. Σε καθεμία φάση δημιουργείται μια
                        ενδιάμεση έκδοση του τελικού προϊόντος, η οποία βελτιώνεται κατά τον επόμενο κύκλο κ.ο.κ. Η διαδικασία αυτή συνεχίζεται μέχρι να παραχθεί μια έκδοση που να ικανοποιεί τις απαιτήσεις των χρηστών.
                        <br/> <br/>
                        Παρόμοια με τη διαδικασία ανάπτυξης ενός λογισμικού, εργαζόμαστε και κατά την
                        ανάπτυξη ενός προγράμματος, ακολουθώντας πάλι μια μεθοδολογία υλοποίησης του
                        κύκλου ανάπτυξης προγράμματος (program development life cycle-PDLC).
                        <br/> <br/>
                        Μια από τις μεθοδολογίες ανάπτυξης προγράμματος αποτελείται από φάσεις, όπως:

                        <ul>
                            <li>Ανάλυση του προβλήματος.</li>
                            <li>Σχεδίαση</li>
                            <li>Συγγραφή κώδικα</li>
                            <li>Έλεγχος και εκσφαλμάτωση</li>
                            <li>Τεκμηρίωση</li>
                        </ul>

                        <img src={spiralImg} alt="Waterfall Model" style={{width: "50vw"}}/>
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h2 style={{marginTop: "1em"}}>
                        2. Η λογική συγγραφής προγράμματος ανάλογα με το είδος προγραμματισμού
                    </h2>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0"
                    }}>
                        Από τη δεκαετία του 1960 μέχρι σήμερα, έχουν αναπτυχθεί διάφορα είδη προγραμματισμού που τα υποστήριξαν πολλές γλώσσες και θα μπορούσαμε να τα κατηγοριοποιήσουμε σε μεγάλες κατευθύνσεις, τα λεγόμενα Προγραμματιστικά Υποδείγματα
                        (programming paradigms). <br/> <br/>

                        Τα βασικά προγραμματιστικά υποδείγματα είναι τα ακόλουθα:

                        <ul>
                            <li>Ο Προστακτικός προγραμματισμός (imperative programming)</li>
                            <li>Ο Δηλωτικός προγραμματισμός (declarative programming)</li>
                        </ul>
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h3 style={{marginTop: "1em"}}>
                        2.1 Προστακτικός προγραμματισμός
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0"
                    }}>
                        Ο <strong>Προστακτικός προγραμματισμός</strong> βασίζεται σε εντολές που υλοποιούν τα βήματα
                        ενός αλγόριθμου, ενεργώντας σε μεταβλητές και αλλάζοντας την κατάστασή τους.
                        Βρίσκεται πιο κοντά στη λογική λειτουργίας του υπολογιστή. Γλώσσες που ακολούθησαν το είδος αυτό είναι οι κλασικές γλώσσες προγραμματισμού, όπως Cobol, Fortran,
                        Pascal, C κ.ά.
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h4 style={{marginTop: "1em"}}>
                        2.1.1 Δομημένος και μη προγραμματισμός
                    </h4>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0"
                    }}>
                        Κατά την αρχική περίοδο του προγραμματισμού, η διακλάδωση της ροής γίνονταν
                        με την εντολή goto, κατάσταση που οδηγούσε σε μη δομημένα προγράμματα
                        (<strong>μη δομημένος προγραμματισμός</strong> - unstructured programming).
                        Στη συνέχεια δημιουργήθηκε το πρότυπο του <strong>Δομημένου προγραμματισμού</strong> (structured programming),
                        με τις εντολές σε ομάδες (blocks) να ακολουθούν την <strong>Ιεραρχική</strong> λογική ροής και τη
                        δυνατότητα χρήσης υπορουτινών και διάφορων άλλων δομών, όπως η <code>if-then-else</code>.

                        <br/> <br/>

                        <strong>Ο Διαδικαστικός </strong>
                        προγραμματισμός (procedural programming) αποτελεί μια υποκατηγορία του Δομημένου προγραμματισμού,
                        με το πρόγραμμα να αποτελείται από αυτοτελείς ομάδες εντολών, τις <strong>διαδικασίες</strong> (procedures). Η γλώσσα προγραμματισμού
                        που αξιοποίησε αρχικά το είδος αυτό είναι η Pascal, από το 1970.

                        <br/> <br/>

                        Ο <strong>Αντικειμενοστραφής</strong> προγραμματισμός (object-oriented programming) βασίζεται,
                        σε αντίθεση με το Διαδικαστικό προγραμματισμό, σε αντικείμενα που αλληλεπιδρούν
                        μεταξύ τους, αποτελώντας πρότυπο που ταιριάζει περισσότερο στη λογική οργάνωσης και λειτουργίας του πραγματικού κόσμου.

                    </p>
                </div>

                <div className="theory-content-section" >
                    <h3 style={{marginTop: "1em"}}>
                        2.2 Δηλωτικός προγραμματισμός
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0"
                    }}>
                        Ο <strong>Δηλωτικός</strong> προγραμματισμός (declarative programming paradigm) βασίζεται στην
                        περιγραφή του σκοπού, τον οποίο ζητείται από το πρόγραμμα να επιτύχει. Στο γενικό
                        αυτό υπόδειγμα ανήκουν διάφορες υποκατηγορίες προγραμματισμού, όπως είναι ο
                        Συναρτησιακός και ο Λογικός.

                        <br/> <br/>

                        Ο <strong>Συναρτησιακός</strong> προγραμματισμός (functional programming) βασίζεται σε μαθηματικές συναρτήσεις, με γλώσσες όπως Lisp, Logo κ.ά.

                        <br/> <br/>

                        Στο <strong>Λογικό</strong> προγραμματισμό (logic programming), ένα πρόγραμμα είναι ένα σύνολο
                        από αξιώματα ή κανόνες οι οποίοι καθορίζουν σχέσεις ανάμεσα σε αντικείμενα. Υπολογισμός ενός λογικού προγράμματος είναι ένα συμπέρασμα που συνάγεται από τα
                        αποτελέσματά του.

                        <br/> <br/>

                        Στο προγραμματιστικό πρότυπο του Δηλωτικού προγραμματισμού μπορούμε να θεωρήσουμε ότι ανήκουν και άλλες γλώσσες, που δεν υπάγονται στις δύο προηγούμενες
                        κατηγορίες. Χαρακτηριστικές είναι η HTML (HyperText Markup Language), γλώσσα σήμανσης-χαρακτηρισμού υπερκειμένου και εν μέρει η SQL (Structured Query
                        Language) γλώσσα για τη διαχείριση δεδομένων, σε ένα Σύστημα Διαχείρισης Σχεσιακών Βάσεων Δεδομένων (RDBMS-Relational Database Management System).
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h3 style={{marginTop: "1em"}}>
                        2.3 Λοιπά πρότυπα και τεχνικές προγραμματισμού
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0"
                    }}>
                        Εκτός από τα παραπάνω υποδείγματα προγραμματισμού υπάρχουν και άλλα, τα οποία
                        είτε δεν μπορούν να χαρακτηριστούν πλήρως ως προγραμματιστικά υποδείγματα είτε
                        αποτελούν τεχνικές και μεθοδολογίες προγραμματισμού τις οποίες θα αναφέρουμε
                        στη συνέχεια.

                        <br/> <br/>

                        <strong>Παράλληλος</strong> προγραμματισμός (parallel programming). Επιτρέπει ταυτόχρονη εκτέλεση διαδικασιών από διαφορετικούς επεξεργαστές.

                        <br/> <br/>

                        <strong>Προγραμματισμός οδηγούμενος από γεγονότα</strong> (event-driven programming).
                        Αποτελεί περισσότερο τεχνική αρχιτεκτονικής ενός προγράμματος σχετικά με τη ροή
                        του, παρά προγραμματιστικό υπόδειγμα. Η ροή του προγράμματος εξαρτάται από την
                        ύπαρξη <strong>Γεγονότων</strong> (events), όπως είναι για παράδειγμα ένα μήνυμα ενός αισθητήρα
                        ή μια ενέργεια του χρήστη με το πάτημα του ποντικιού ή ενός πλήκτρου. Παράδειγμα
                        αποτελεί η Microsoft Visual-Basic.

                        <br/> <br/>

                        <strong>Οπτικός</strong> προγραμματισμός (visual programming). Δεν αποτελεί υπόδειγμα, αλλά
                        εκφράζει τη δυνατότητα γλωσσών ή περιβαλλόντων προγραμματισμού να παρέχουν
                        τη δυνατότητα δημιουργίας του προγράμματος μέσω γραφικών αντικειμένων, αντί
                        της πληκτρολόγησης του κειμένου που αντιστοιχεί σε εντολές. Οι γλώσσες οπτικού
                        προγραμματισμού βασίζονται, άλλες σε γραφικά με τη μορφή εικονιδίων (icon-based
                        languages), άλλες σε διαγράμματα (diagram languages) και τέλος, άλλες σε φόρμες
                        (form based languages).

                        <br/> <br/>

                        Στην κατηγορία αυτή ανήκουν περιβάλλοντα όπως το Authorware της Adobe, περιβάλλοντα δημιουργίας σεναρίων όπως το Kodu της Microsoft και το Alice, το MIT
                        Scratch, το Greenfoot.

                        <br/> <br/>

                        <strong>Προγραμματισμός δέσμης ενεργειών</strong> (script programming) είναι τύπος - και όχι
                        υπόδειγμα- προγραμματισμού δημιουργίας μικρών τμημάτων κώδικα και όχι ολοκληρωμένων προγραμμάτων.
                        Είναι υψηλού επιπέδου προγραμματισμός που διερμηνεύεται κατά την εκτέλεση από ένα άλλο πρόγραμμα, όπως ένας φυλλομετρητής

                        <br/> <br/>

                        <strong>Αρθρωτός ή Τμηματικός Προγραμματισμός</strong> (modular programming). Σχετίζεται περισσότερο με τεχνική σχεδίασης λογισμικού παρά με πρότυπο. Χαρακτηρίζεται από
                        τη διαίρεση του προβλήματος σε απλούστερα τμήματα, αυτά με τη σειρά τους σε επί
                        μέρους μικρότερα κ.ο.κ. Παρέχει απλούστευση της επίλυσης ενός προβλήματος, ευκολία κωδικοποίησης και συντήρησης. Γενικά ως τμήμα (module) θεωρούμε ένα
                        σύνολο ενεργειών το οποίο εκτελεί μια καθορισμένη λειτουργία ενός προγράμματος
                        και είναι κατά το δυνατόν ανεξάρτητο από τα άλλα τμήματα.

                        <br/> <br/>

                        <strong>Ιεραρχικός σχεδιασμός</strong> <br/>

                        Η μέθοδος ανάλυσης ενός προβλήματος σε μικρότερα είναι εκείνη με την οποία αντιμετωπίζουμε το πρόβλημα ως μια πολυεπίπεδη δομή. Έτσι, για τη σχεδίασή του, ξεκινάμε από το υψηλότερο επίπεδο και στη συνέχεια το αναλύουμε σε όλο και χαμηλότερα, έως ότου φθάσουμε στο κατώτερο επίπεδο ανάλυσης. Η τεχνική αυτή ονομάζεται
                        ιεραρχικός σχεδιασμός (top down design).
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h3 style={{marginTop: "1em"}}>
                        2.4 Ενδεικτικά περιβάλλοντα και γλώσσες προγραμματισμού
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "1vw"
                    }}>
                        <Card style={{
                            width: '18rem'
                        }}>
                            <Card.Img style={{width: "20vh", alignSelf: "center", paddingTop: "2vh"}} variant="top" src="data:image/png;base64,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" />
                            <Card.Body  style={{textAlign: "center"}}>
                                <Card.Title>
                                    <strong>Pascal</strong>
                                </Card.Title>
                                <Card.Text>
                                    Η πλέον κλασική γλώσσα δομημένου προγραμματισμού στην κλασική της έκδοση.
                                    <br/>
                                    <Card.Link href="https://el.wikipedia.org/wiki/Pascal_(γλώσσα_προγραμματισμού)">
                                        <i className="bi bi-link-45deg"></i> Διαβάστε περισσότερα...
                                    </Card.Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{width: "20vh", alignSelf: "center", paddingTop: "2vh"}} variant="top" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" />
                            <Card.Body  style={{textAlign: "center"}}>
                                <Card.Title>
                                    <strong>Visual Basic</strong>
                                </Card.Title>
                                <Card.Text>
                                    Περιβάλλον προγραμματισμού που ακολουθεί μικτό πρότυπο υποδειγμάτων.
                                    <br/>
                                    <Card.Link href="https://el.wikipedia.org/wiki/Visual_Basic">
                                        <i className="bi bi-link-45deg"></i> Διαβάστε περισσότερα...
                                    </Card.Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{width: "20vh", alignSelf: "center", paddingTop: "2vh"}} variant="top" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                            <Card.Body  style={{textAlign: "center"}}>
                                <Card.Title>
                                    <strong>C++</strong>
                                </Card.Title>
                                <Card.Text>
                                    Επέκταση της C. Αποτελεί γλώσσα αντικειμενοστραφούς προγραμματισμού, αν
                                    και μπορεί να χρησιμοποιηθεί και για διδασκαλία διαδικαστικού προγραμματισμού.
                                    <br/>
                                    <Card.Link href="https://el.wikipedia.org/wiki/C%2B%2B">
                                        <i className="bi bi-link-45deg"></i> Διαβάστε περισσότερα...
                                    </Card.Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{width: "20vh", alignSelf: "center", paddingTop: "2vh"}} variant="top" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                            <Card.Body  style={{textAlign: "center"}}>
                                <Card.Title>
                                    <strong>Java</strong>
                                </Card.Title>
                                <Card.Text>
                                    Σύγχρονη γλώσσα αντικειμενοστραφούς προγραμματισμού.
                                    <br/>
                                    <Card.Link href="https://el.wikipedia.org/wiki/Java">
                                        <i className="bi bi-link-45deg"></i> Διαβάστε περισσότερα...
                                    </Card.Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{width: "20vh", alignSelf: "center", paddingTop: "2vh"}} variant="top" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                            <Card.Body  style={{textAlign: "center"}}>
                                <Card.Title>
                                    <strong>Python</strong>
                                </Card.Title>
                                <Card.Text>
                                    Γλώσσα που ανήκει ουσιαστικά σε μικτά υποδείγματα προγραμματισμού, όπως Συναρτησιακό, Αντικειμενοστραφές.
                                    <br/>
                                    <Card.Link href="https://el.wikipedia.org/wiki/Python">
                                        <i className="bi bi-link-45deg"></i> Διαβάστε περισσότερα...
                                    </Card.Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{width: "20vh", alignSelf: "center", paddingTop: "2vh"}} variant="top" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prolog/prolog-original.svg" />
                            <Card.Body  style={{textAlign: "center"}}>
                                <Card.Title>
                                    <strong>Prolog</strong> <br/>
                                    <i>Programming in Logic</i>
                                </Card.Title>
                                <Card.Text>
                                    Γλώσσα Λογικού προγραμματισμού.
                                    <br/>
                                    <Card.Link href="https://el.wikipedia.org/wiki/Prolog">
                                        <i className="bi bi-link-45deg"></i> Διαβάστε περισσότερα...
                                    </Card.Link>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h3 style={{marginTop: "1em"}}>
                        2.5 Δραστηριότητα. Κατάταξη γλωσσών προγραμματισμού στα προγραμματιστικά υποδείγματα
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0",
                    }}>
                        <strong>Βήμα 1:</strong> <br/>
                        Δημιουργήστε έναν πίνακα δύο διαστάσεων, με τις στήλες να αντιστοιχούν
                        στις έννοιες που ήδη αναφέρθηκαν στην ενότητα του αντικειμενοστρεφούς προγραμματισμού και τις γραμμές του σε Γλώσσες προγραμματισμού ή και περιβάλλοντα που
                        γνωρίζετε, λειτουργώντας σε ομάδες. <br/> <br/>

                        <strong>Βήμα 2:</strong> <br/>
                        Βρείτε, με αναζήτηση, γλώσσες ή περιβάλλοντα προγραμματισμού που σας
                        ενδιαφέρουν και γράψτε τις ονομασίες τους στις γραμμές.  <br/> <br/>

                        <strong>Βήμα 3:</strong> <br/>
                        Αναζητήστε στο Διαδίκτυο χαρακτηριστικά κάθε γλώσσας ή περιβάλλοντος
                        σε σχέση με τις έννοιες της ενότητας, σημειώνοντας στο αντίστοιχο κελί του πίνακα
                        που αντιστοιχούν. Να λάβετε υπόψη ότι πολλά περιβάλλοντα ανήκουν σε μικτό σχήμα
                        Προγραμματιστικού Υποδείγματος (multiparadigm environments). <br/> <br/>

                        <Alert key={"info"} variant={"info"}>
                                <strong>
                                    <i className="bi bi-info-circle"> </i>
                                    Βοήθεια:
                                </strong>
                                <br/>
                                Μεταξύ των αναζητήσεών σας, μπορείτε να δείτε τις: Object Pascal - Apple
                                Computer, Delphi της Borland έως το 2006, C, C#, C++, Java, Eiffel, Kodu Microsoft,
                                AppInventor, Greenfoot.
                        </Alert>
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h2 style={{marginTop: "1em"}}>
                        3. Αντικειμενοστρεφής προγραμματισμός
                    </h2>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0"
                    }}>
                        Στην παράγραφο αυτή θα αναφερθούμε συνοπτικά στον Αντικειμενοστρεφή Προγραμματισμό (Object-oriented programming - OOP).
                        Πρόκειται για είδος προγραμματισμού που περιστρέφεται γύρω από την έννοια της <strong>Κλάσης</strong> (Class), η οποία περιγράφει
                        <strong>Αντικείμενα</strong> (Objects), τα οποία περιέχουν δεδομένα στη μορφή <strong>Ιδιοτήτων</strong>
                        (Properties) και κώδικα στη μορφή <strong>Μεθόδων</strong> (Methods).

                        <br/> <br/>

                        Την ανάλυση των παραπάνω εννοιών θα την βρείτε στο βιβλίο της Γ' ΓΕ.Λ. "Ανάπτυξη
                        Εφαρμογών σε Προγραμματιστικό Περιβάλλον" των Βακάλη Α., κ.ά. Ο.Ε.Δ.Β. στο κεφάλαιο 11 και στις παραγράφους 11.1 και 11.2.

                        <br/> <br/>

                        <strong>Παράδειγμα 1</strong> <br/>
                        Κλάση: Όχημα <br/>
                        Ιδιότητες: Χρώμα, Τιμή, Αριθμός Τροχών, Ταχύτητα <br/>
                        Μέθοδοι: Επιτάχυνε, Φρέναρε <br/>
                        Ένα Αντικείμενο έχει συγκεκριμένες Ιδιότητες, όπως για παράδειγμα το Αντικείμενο
                        “Αυτοκίνητό 1" με Ιδιότητες: Χρώμα: “Μαύρο", Τιμή: 10000, Αριθμός τροχών: 4, Ταχύτητα: 120 km/h, ή το Αντικείμενο “Μοτοσικλέτα 2" με Ιδιότητες: Χρώμα: Κόκκινο,
                        Τιμή: 4000, Αριθμός τροχών: 2, Ταχύτητα: 100 km/h. Έτσι, μια κλάση αποτελεί ένα
                        αφηρημένο σχήμα το οποίο αποκτά συγκεκριμένη υπόσταση όταν δημιουργούνται
                        αντικείμενα όπως το “Αυτοκίνητο 1” και η “Μοτοσικλέτα 2”, καθένα με τα δικά του
                        χαρακτηριστικά. Οι μέθοδοι που περιγράφονται στην κλάση εμπεριέχουν κώδικα. Για
                        παράδειγμα, οι μέθοδοι Επιτάχυνε και Φρέναρε, αυξάνουν και μειώνουν την ταχύτητα του αντικειμένου αντίστοιχα. <br/> <br/>

                        <strong>Παράδειγμα 2</strong> <br/>
                        Κλάση: Ζώο <br/>
                        Ιδιότητες: Ηλικία, Ύψος <br/>
                        Μέθοδοι: Μεγάλωσε, Ψήλωσε <br/>
                        Η μεταβλητή “Καμηλοπάρδαλη 1” είναι ένα αντικείμενο της Κλάσης Ζώο. Όταν το αντικείμενο δημιουργείται, οι ιδιότητες Ηλικία και Ύψος αρχικοποιούνται. Οι μέθοδοι της
                        κλάσης ορίζουν τη συμπεριφορά των αντικειμένων και τον τρόπο με τον οποίο μεταβάλλεται η κατάστασή τους. Για παράδειγμα, οι μέθοδοι Μεγάλωσε και Ψήλωσε,
                        αυξάνουν τις τιμές Ηλικία και Ύψος ενός αντικειμένου αντίστοιχα. <br/> <br/>
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h3 style={{marginTop: "1em"}}>
                        3.1 Εισαγωγή στον αντικειμενοστρεφή προγραμματισμό και στην οδήγηση από τα γεγονότα
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0"
                    }}>
                        Σε μια πλατφόρμα γραφικής ανάπτυξης παιχνιδιών, όπως π.χ. στο www.sploder.
                        com, επιλέξτε κάποια από τις γραφικές μηχανές ανάπτυξης και κατασκευάστε ένα
                        παιχνίδι που να ικανοποιεί τις εξής προδιαγραφές:

                        <br/> <br/>

                        Να υπάρχουν σε αυτό, εκτός από το χαρακτήρα, τουλάχιστον 3 ακόμα αντικείμενα
                        που να ανήκουν σε διαφορετικές κατηγορίες. Από τα αντικείμενα αυτά, τουλάχιστον 2
                        πρέπει να επιδρούν στο παιχνίδι με τρόπο που να μην περιορίζεται στο να αποτελούν
                        εμπόδια πρόσβασης. Επίσης πρέπει να υπάρχουν τουλάχιστον 2 πίστες ή τμήματα της
                        πίστας που να ανοίγουν, αφού ικανοποιηθούν κάποιες προϋποθέσεις. Η μετάβαση
                        αυτή πρέπει να γίνεται μέσα στη ροή του παιχνιδιού και όχι, για παράδειγμα, μετά από
                        οθόνη σκορ για την πίστα που ολοκληρώθηκε. Επιδιώξτε, αν η μηχανή που επιλέξατε
                        επιτρέπει, να έχετε διαφορετικά εδάφη (terrains) στο παιχνίδι σας.

                        <br/> <br/>

                        Υλοποιήστε σε στάδια: <br/> <br/>

                        <strong>Στάδιο 1:</strong> <br/>
                        Σχεδιάστε την πρώτη πίστα σας, ώστε να περιλαμβάνει όλα τα διαφορετικά εδάφη.
                        Τοποθετήστε τα αντικείμενα που επιλέξατε σε πολλαπλά στιγμιότυπα (παραπάνω από μια φορές το καθένα).
                        <br/> <br/>

                        <strong>Στάδιο 2:</strong> <br/>
                        Επιλέξτε το χαρακτήρα σας και τοποθετήστε τον στην πίστα. Μετατρέψτε το
                        παιχνίδι σε εκτελέσιμο και δοκιμάστε το.
                        <br/> <br/>

                        Παρατηρήστε πώς επηρεάζει το έδαφος την κίνηση του χαρακτήρα σας. Πώς πιστεύετε ότι υλοποιείται αυτό; <br/> <br/>
                        Παρατηρήστε τι συμβαίνει, όταν ο χαρακτήρας σας έρχεται σε επαφή με κάποιο από τα αντικείμενα. <br/> <br/>
                        Χρησιμοποιήσατε κάποιο όπλο ή εργαλείο; Αv ναι, τι συνέβη στο χαρακτήρα, όταν ήρθε σε επαφή μαζί του; <br/> <br/>

                        <strong>Στάδιο 3:</strong> <br/>
                        Σχεδιάστε την επόμενη πίστα του παιχνιδιού σας. Με ποιο τρόπο αλλάζει πίστα ο χαρακτήρας; Εμπλέκεται κάποιο άλλο αντικείμενο;
                        Υπάρχουν κάποιες προϋποθέσεις;
                        <br/> <br/>

                        <strong>Στάδιο 4:</strong> <br/>
                        Απαντήστε, όσο καλύτερα μπορείτε, στις παρακάτω ερωτήσεις:
                        <ul>
                            <li>Πόσα αντικείμενα έχει συνολικά το παιχνίδι σας; Πόσα είναι τα στιγμιότυπα του κάθε αντικειμένου;</li>
                            <li>Είναι ο χαρακτήρας σας αντικείμενο;</li>
                            <li>Ποια είναι τα βασικά γεγονότα που δίνουν ενδιαφέρον στο παιχνίδι σας;</li>
                            <li>
                                Αν σας πει κάποιος ότι η αντίδραση σε ένα γεγονός είναι προγραμματισμένη ως μέθοδος μέσα σε κάποιο αντικείμενο, σε ποιο αντικείμενο θεωρείτε ότι ταιριάζει καλύτερα
                                να ανήκει η μέθοδος που αντιστοιχεί σε κάθε γεγονός από αυτά που απαντήσατε στην
                                προηγούμενη ερώτηση;
                            </li>
                            <li>Είναι η αλλαγή πίστας γεγονός και αν ναι, με ποια αντικείμενα συνδέεται; Σε ποιο από αυτά θα ανήκει η αντίστοιχη μέθοδος;</li>
                            <li>Αν μια κλάση είναι ένα πρότυπο για την κατασκευή αντικειμένων, μπορείτε να εντοπίσετε κλάσεις στο περιβάλλον της μηχανής ανάπτυξης που χρησιμοποιήσατε;</li>
                            <li>
                                Αν σας πει κάποιος ότι οι κλάσεις έχουν κληρονομικότητα, δηλαδή μεταφέρουν τα
                                χαρακτηριστικά και τις μεθόδους τους στις κλάσεις και τα αντικείμενα που κατασκευάζονται από αυτές, αυτό σας βοηθά να εντοπίσετε κλάσεις και υποκλάσεις στο περιβάλλον αυτό;
                            </li>
                        </ul>

                        <strong>Στάδιο 5:</strong> <br/>
                         Παρουσιάστε το παιχνίδι σας στους συμμαθητές σας και συζητήστε τις απαντήσεις που δώσατε στις παραπάνω ερωτήσεις
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h3 style={{marginTop: "1em"}}>
                        4. Ερωτήσεις
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0",
                        width: "100%"
                    }}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Ποιες είναι οι βασικές φάσεις για τη διαδικασία ανάπτυξης ενός συστήματος λογισμικού στο μοντέλο του καταρράκτη;</Accordion.Header>
                                <Accordion.Body>
                                    Το Μοντέλο του Καταράκτη υποδιαιρεί τη διαδικασία ανάπτυξης ενός συστήματος λογισμικού στις ακόλουθες φάσεις:
                                    <ul>
                                        <li>Ανάλυση απαιτήσεων</li>
                                        <li>Σχεδίαση</li>
                                        <li>Υλοποίηση</li>
                                        <li>Ολοκλήρωση</li>
                                        <li>Λειτουργία και συντήρηση</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Ποια είναι τα βασικά προγραμματιστικά υποδείγματα;</Accordion.Header>
                                <Accordion.Body>
                                    Τα βασικά προγραμματιστικά υποδείγματα είναι τα ακόλουθα:
                                    <ul>
                                        <li>
                                            <strong>Προστακτικός προγραμματισμός (imperative programming)</strong> <br/>
                                            βασίζεται σε εντολές που υλοποιούν τα βήματα
                                            ενός αλγόριθμου, ενεργώντας σε μεταβλητές και αλλάζοντας την κατάστασή τους.
                                            Βρίσκεται πιο κοντά στη λογική λειτουργίας του υπολογιστή. Γλώσσες που ακολούθησαν το είδος αυτό είναι οι κλασικές γλώσσες προγραμματισμού, όπως Cobol, Fortran,
                                            Pascal, C κ.ά.
                                        </li>
                                        <li>
                                            <strong>Δηλωτικός προγραμματισμός (declarative programming)</strong> <br/>
                                            βασίζεται στην
                                            περιγραφή του σκοπού, τον οποίο ζητείται από το πρόγραμμα να επιτύχει. Στο γενικό
                                            αυτό υπόδειγμα ανήκουν διάφορες υποκατηγορίες προγραμματισμού, όπως είναι ο
                                            Συναρτησιακός και ο Λογικός.
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Ποια είναι τα βασικά χαρακτηριστικά του δομημένου προγραμματισμού;</Accordion.Header>
                                <Accordion.Body>
                                    Στον <strong>Δομημένο προγραμματισμό</strong> (structured programming),
                                    οι εντολές χωρίζονται σε ομάδες (blocks) και ακολουθούν την Ιεραρχική λογική ροής. Επίσης υπάρχει
                                    δυνατότητα χρήσης υπορουτινών και διάφορων άλλων δομών, όπως η <code>if-then-else</code>.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Ποια είναι τα βασικά χαρακτηριστικά του αντικειμενοστραφούς προγραμματισμού;</Accordion.Header>
                                <Accordion.Body>
                                    Ο <strong>Αντικειμενοστραφής προγραμματισμός</strong> (object-oriented programming) βασίζεται,
                                    σε αντίθεση με το Διαδικαστικό προγραμματισμό, σε αντικείμενα που αλληλεπιδρούν
                                    μεταξύ τους, αποτελώντας πρότυπο που ταιριάζει περισσότερο στη λογική οργάνωσης και λειτουργίας του πραγματικού κόσμου.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Αναφέρετε μερικές σύγχρονες γλώσσες προγραμματισμού.</Accordion.Header>
                                <Accordion.Body>
                                    <a href="https://el.wikipedia.org/wiki/Java" target="_blank" rel="noreferrer">Java</a>,
                                    <a href="https://el.wikipedia.org/wiki/Python" target="_blank" rel="noreferrer">Python</a>,
                                    <a href="https://el.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noreferrer">C++</a>,
                                    <a href="https://el.wikipedia.org/wiki/Prolog" target="_blank" rel="noreferrer">Prolog</a>.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </p>
                </div>

                <div className="theory-content-section" >
                    <h3 style={{marginTop: "1em"}}>
                        5. Αναφορές - Βιβλιογραφία
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        margin: "1em 0",
                        width: "100%"
                    }}>
                        <ul>
                            <li>
                                Εφαρμογές Πολυμέσων, Αβραντινής κ.ά., Βιβλίο Μαθητή ΕΠΑ.Λ. ΙΤΥΕ/ΔΙΟΦΑΝΤΟΣ
                            </li>

                            <li>
                                Προγραμματισμός Υπολογιστών, Σιδερίδης, κ.ά., Τ.Ε.Ε., Ο.Ε.Δ.Β. Κεφάλαιο 7, παράγραφο 3 (7.3) Είδη προγραμματισμού και κεφ. 17 'Έλεγχος και εκσφαλμάτωση
                                προγράμματος και Κεφ. 18. Τεκμηρίωση προγράμματος.
                            </li>
                        </ul>

                        <Alert variant="danger">
                            <Alert.Heading>
                                <i className="bi bi-exclamation-triangle"> </i>
                                Disclaimer
                            </Alert.Heading>

                            Ολόκληρο το περιεχόμενο της σελίδας για την θεωρία του μαθήματος πάρθηκε <strong>εξ' ολοκλήρου </strong> από το Σχολικό Βιβλίο
                            "<a href="http://ebooks.edu.gr/ebooks/handle/8547/3980">Αρχές Προγραμματισμού Υπολογιστών</a>"
                            της Β' Τάξης Επαγγελματικών Λυκείων.

                        </Alert>
                    </p>

                </div>
            </section>
        </div>
    )
}