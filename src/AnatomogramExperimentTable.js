import React from 'react'
import PropTypes from 'prop-types'

import Anatomogram from '@ebi-gene-expression-group/organ-anatomogram'
import HeatmapView from '@ebi-gene-expression-group/scxa-experiment-cell-type-heatmap'

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)

class AnatomogramExperimentTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSpecies: props.species,
      showIds: props.showIds,
      highlightIds: [],
      selectIds: [],
      selectAllIds: [],
      resource: props.resource[0]
    }

    this._addRemoveFromSelectIds = this._addRemoveFromSelectIds.bind(this)
    this._showLinkBoxIds = this._showLinkBoxIds.bind(this)
    this._clearSelectedIds = this._clearSelectedIds.bind(this)
    this._handleSelectOnChange = this._handleSelectOnChange.bind(this)
  }

  _handleSelectOnChange(event) {
    this.setState({
      selectedSpecies: event.target.value
    })
  }

  _addRemoveFromSelectIds(ids) {
    this.setState({
      selectIds: ids
    })

    window.alert(`Organ:`+ this.state.selectedSpecies+ ` Ontology ID:`+ ids+ ` Experiment Accession:`+ this.props.experimentAccession)
  }

  _showLinkBoxIds(id){
    this.setState({
      showIds: [...new Set(id.concat(this.state.showIds))]
    })
  }

  _clearSelectedIds() {
    this.setState({
      showIds: this.props.showIds,
      selectIds: [],
      highlightIds:[]
    })
  }

  render() {
    const {host, organs} = this.props

    const heatmapArgs = {
      resource: ``,
      host: ``,
      type:`cellType`,
      props: {
        species: `Homo sapiens`,
        hasDynamicHeight: true,
        heatmapRowHeight: 20,
        wrapperClassName: `row expanded`,
      }
    }

    return (
      <div className={`row`}>
        <div className={`small-12 medium-6 columns`}>
          {
            organs.length > 1 &&
              <div className={`small-3 small-centered columns`}>
                <select value={this.state.selectedSpecies} onChange={this._handleSelectOnChange}>
                  {organs.map((organ) => {
                    return <option key={organ} value={organ}>{capitalizeFirstLetter(organ.replace(`_`, ` `))}</option>
                  })}
                </select>
              </div>
          }

          <Anatomogram
            species={this.state.selectedSpecies}
            showIds={this.state.showIds}
            highlightIds={this.state.highlightIds}
            selectIds={this.state.selectIds}
            selectAllIds={this.state.selectAllIds}
            clearSelectedIds={this._clearSelectedIds}
            onClick={this._addRemoveFromSelectIds}
            showLinkBoxIds={this._showLinkBoxIds}
            organs={organs}
            atlasUrl={host}
          />
        </div>

        <div className={`small-12 medium-6 columns`}>
          <HeatmapView {...heatmapArgs} resource={this.state.resource}/>
        </div>
      </div>
    )
  }
}

AnatomogramExperimentTable.propTypes = {
  host: PropTypes.string,
  resource: PropTypes.string,
  experimentAccession: PropTypes.string.isRequired,
  showIds: PropTypes.array.isRequired,
  species: PropTypes.string.isRequired,
  organs: PropTypes.array.isRequired
}

AnatomogramExperimentTable.defaultProps = {
  host: `http://localhost:9000`,
  resource: `/json/anatomogram_experiments`
}

export default AnatomogramExperimentTable
