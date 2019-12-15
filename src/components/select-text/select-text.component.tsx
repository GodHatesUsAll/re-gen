import React, { Component, FormEvent } from "react";
import axios from 'axios';
import { State, TypeProps } from "./select-text.type"
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

class SelectTextComponent extends Component<TypeProps> {
    state: State = {
        value: '',
        copied: false
    }

    handleOnInput = (event: FormEvent): void => {
        this.setState({
            value: (event.target as HTMLTextAreaElement).value
        });
    }

    handleClick = (): void => {
        this.setState({
            selected: this.state.value
        })
    }

    handleMouseUp = (): void => {
        var selected: Selection | null = window.getSelection()

        this.setState({
            selected: selected!.toString()
        })
    }

    clearData = () => {
        this.setState({
            value: '',
            selected: '',
            result: ''
        })
    }

    copyToClipboard = () => {
        if (this.state.result) {
            navigator.clipboard.writeText(this.state.result)
            this.setState({
                copied: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        copied: false
                    });
                }, 1500)
            })
        }
    }

    generateRegex = async (): Promise<void> => {
        /*let response: any = await axios.post('http://localhost:8000/api/generate', {
            input: this.state.selected
        })*/

        let response = 'soadoaks ndoaskdn aosdkn asodn asias of9 ihtr39128 f3 fh9 wqefoias nmvlkcfdvmnbv ;so jfpwO UT09328EWHF WUSOIFHG SDOF'


        this.setState({
            result: response
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <Container>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="space-between" spacing={3}>
                            <Grid item>
                                <Paper className={classes.paper} >
                                    <h4 className='paper-heading'>Select part of text or
                                    <Link
                                            component="button"
                                            variant="body2"
                                            style={{ marginLeft: '5px' }}
                                            onClick={this.handleClick}
                                        >
                                            select all
                                    </Link>
                                    </h4>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Put some text here"
                                        multiline
                                        fullWidth={true}
                                        autoFocus={true}
                                        rows={29}
                                        rowsMax={29}
                                        style={{
                                            padding: '5px',
                                        }}
                                        value={this.state.value}
                                        onInput={this.handleOnInput}
                                        onMouseUp={this.handleMouseUp}
                                        variant="outlined"
                                    />
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper} >
                                    <h4 className='paper-heading'>Selected text |
                                        <Link
                                            component="button"
                                            variant="body2"
                                            style={{ marginLeft: '5px' }}
                                            onClick={this.generateRegex}
                                        >
                                            Generate regex
                                        </Link>
                                    </h4>
                                    <pre >
                                        {this.state.selected}
                                    </pre>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper} >
                                    <h4 className='paper-heading'>Result |
                                        <Link
                                            component="button"
                                            variant="body2"
                                            style={{ marginLeft: '5px' }}
                                            onClick={this.clearData}
                                        >
                                            Clear
                                        </Link> |
                                        <Link
                                            component="button"
                                            variant="body2"
                                            style={{ marginLeft: '5px' }}
                                            onClick={this.copyToClipboard}
                                        >
                                            {
                                                this.state.copied ? <span style={{
                                                    color: '#32CD32'
                                                }}>Copied!</span> : 'Copy to clipboard'
                                            }
                                            
                                        </Link>
                                    </h4>
                                    <span>
                                        {this.state.result}
                                    </span>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        )
    }
}

const useStyles = {
    root: {
        flexGrow: 1,
        marginTop: '2%'
    },
    paper: {
        height: '680px',
        "overflow-y": 'auto',
        width: '350px',
        padding: '10px',
    },
}

export default withStyles(useStyles)(SelectTextComponent);