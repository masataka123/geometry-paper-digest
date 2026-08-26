---
layout: paper
title: "On the Yau-Tian-Donaldson conjecture for weighted cscK metrics"
title_ja: "重み付きcscK計量に対するYau--Tian--Donaldson予想"
authors: "Sébastien Boucksom, Mattias Jonsson"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: >-
  We establish a version, formulated in terms of non-Archimedean pluripotential theory, of the Yau-Tian-Donaldson conjecture for constant scalar curvature and, more generally, weighted extremal K\"ahler metrics with prescribed compact symmetry group on an arbitrary polarized projective manifold. This is accomplished by extending important previous work of Chi Li to the weighted case, and by establishing general slope formulas for the relevant weighted entropy and energy functionals. Among other things, our approach relies on key a priori estimates for cscK metrics due to Chen-Cheng (recently extended to the weighted case by Di Nezza-Jubert-Lahdili and Han-Liu), and on a crucial estimate for psh envelopes due to Berman-Demailly-Di Nezza-Trapani.
topic: differential-geometry
tags:
  - csck-extremal-kahler-metrics
  - k-stability
  - pluripotential-theory
arxiv_id: "2509.15016v1"
arxiv_url: "https://arxiv.org/abs/2509.15016"
arxiv_submitted: "2025-09-18"
arxiv_updated: "2025-09-18"
summary: >-
  非Archimedes的多重ポテンシャル論を用い、偏極射影多様体上のcscK計量の存在をbK多安定性および一様bK多安定性と同値にする。さらに対数凹な重みと所定のコンパクト対称群の下で、重み付きextremal Kähler計量に対する同変・相対版を確立する。
abstract_en: ""
summary_en: >-
  The paper proves a non-Archimedean Yau--Tian--Donaldson correspondence for arbitrary polarized projective manifolds. Existence of a cscK metric is equivalent to both bK-polystability and its uniform form, where finite-energy non-Archimedean potentials complete the usual test configurations. An equivariant theorem treats weighted extremal metrics with prescribed compact symmetry and log-concave positive weights. General slope formulas for weighted entropy and energy connect the analytic and non-Archimedean sides.
abstract_ja: >-
  任意の偏極射影多様体上で、定スカラー曲率Kähler計量およびより一般の重み付きextremal Kähler計量に対するYau--Tian--Donaldson予想の一形式を、非Archimedes的多重ポテンシャル論によって確立する。Chi Liの手法を重み付きの場合へ拡張し、関連する重み付きエントロピーとエネルギーの一般的な傾き公式を証明する。cscK計量の先験評価とpsh envelopeの評価が解析側の主要な入力となる。
abstract_source_url: "https://arxiv.org/abs/2509.15016"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2509.15016](https://arxiv.org/abs/2509.15016)
- **著者:** Sébastien Boucksom, Mattias Jonsson
- **初回投稿日:** 2025年9月18日
- **最終更新日:** 2025年9月18日（v1）
- **主分類・副分類:** math.DG（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Yau--Tian--Donaldson予想は偏極多様体上の標準Kähler計量の存在を代数幾何的安定性で特徴付ける。一般のcscK問題では通常のK多安定性だけでは十分でない可能性があり、test configurationを越えた完備化された非Archimedes的対象を用いる必要がある。

本論文は有限エネルギー非Archimedes的ポテンシャル全体$\mathcal E^1_{\mathrm{na}}$上でMabuchi汎関数を考え、零点が実product test configurationだけであるbK多安定性を定義する。cscK計量の存在、bK多安定性、一様bK多安定性が同値であることを示す。

さらにコンパクトトーラス$T$とそれと可換なコンパクト群$S$、moment polytope上の正の重み$v,w$を固定し、$v$の対数凹性の下で重み付きextremal計量に同様の同変・相対対応を与える。通常のextremal計量や一部のKähler--Ricci solitonもこの枠組みに含まれる。

解析側のMabuchiエネルギーの無限遠傾きと非Archimedes的Mabuchi汎関数を一致させることが橋渡しとなる。重み付きエントロピー・エネルギーの傾き公式が、重み付き一般化を可能にする新しい技術的貢献である。

## 背景と問題設定

通常のtest configurationに対応する非Archimedes的計量の空間$\mathcal H_{\mathrm{na}}$をDarvas距離$d_{1,\mathrm{na}}$で完備化すると$\mathcal E^1_{\mathrm{na}}$を得る。非Archimedes的Mabuchi汎関数$M^{\mathrm{na}}$をこの空間へ下半連続に延長し、実product test configurationの集合を$\mathcal P_{\mathbf R}$とする。

bK多安定性は$M^{\mathrm{na}}(\phi)\ge0$かつ等号が$\phi\in\mathcal P_{\mathbf R}$の場合に限る条件であり、一様版はある$\sigma>0$について

$$
M^{\mathrm{na}}(\phi)\ge
\sigma d_{1,\mathrm{na}}(\phi,\mathcal P_{\mathbf R})
$$

を要求する。この拡張により退化を通常のample test configurationだけに限定しない。

## 主結果

### cscK版YTD対応（Theorem A）

滑らかな複素射影多様体$X$とample line bundle $L$について、次は同値である。

1. $c_1(L)$にcscK計量が存在する。
2. $(X,L)$はbK多安定である。
3. $(X,L)$は一様bK多安定である。

これは通常のtest configurationを有限エネルギー非Archimedes的ポテンシャルへ拡張した安定性による、一般偏極の場合の存在特徴付けである。

### 重み付きextremal版（Theorem B）

$T\subset S\subset\operatorname{Aut}(X,L)$を所定のコンパクト対称群、$v,w$をmoment polytope上の正の滑らかな重みとし、$v$が対数凹であると仮定する。このとき$S$不変重み付きextremal計量の存在は、$S$同変相対重み付きbK多安定性、およびその一様版と同値である。

### 傾きの同一視（Theorem C）

Introductionでは解析的測地線rayのMabuchi傾き$M^{\mathrm{rad}}$について、有限となる方向は非Archimedes的空間に属し、そこで

$$
M^{\mathrm{rad}}(\phi)=M^{\mathrm{na}}(\phi)
$$

となることが主対応を支える結果として述べられる。

## 証明の見取り図

解析側ではcscK計量の存在をMabuchiエネルギーの自己同型群を法としたcoercivityへ移し、さらに測地線ray上の一様な傾き不等式へ言い換える。測地線rayの漸近錐に非Archimedes的有限エネルギー空間を等長に埋め込み、Theorem Cで解析的傾きと非Archimedes的汎関数を一致させる。重み付き版では同じ枠組みに相対重み付きMabuchi汎関数を導入し、重み付きエントロピーの漸近公式と正則性評価を用いる。

## 原論文との対応

- **Abstractページ:** [arXiv:2509.15016](https://arxiv.org/abs/2509.15016)
- **Introduction:** pp. 1–9
- **Introduction中で言及された主要定理番号:** Theorem A, Theorem B, Theorem A', Theorem C
- **論文構成の説明:** Contents, p. 1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
