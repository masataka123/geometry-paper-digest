---
layout: paper
title: "Singularity criteria for K-stability of adjoint foliated structures"
title_ja: "随伴葉層構造のK安定性に対する特異点判定"
authors: "Theodoros Stylianos Papazachariou"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove singularity criteria for the $t$-K-stability of adjoint foliated structures. We first show
  that K-semistability of adjoint foliated structures implies log canonicity by extending Odaka's flag
  ideal characterisation of the mixed Donaldson--Futaki invariant to the adjoint foliated setting. We
  then prove that adjoint Calabi--Yau foliated structures are K-semistable, and klt ones are K-stable,
  while log canonical adjoint general type foliated structures are K-stable with respect to the
  canonical polarisation. We also show that K-semistable adjoint Fano foliated structures are klt. In
  particular, their ambient varieties are potentially klt and of Fano type.
topic: algebraic-geometry
tags:
  - singularities
  - vector-bundles-sheaves
  - k-stability
  - fano-varieties
arxiv_id: "2605.28140v1"
arxiv_url: "https://arxiv.org/abs/2605.28140v1"
arxiv_submitted: "2026-05-27"
arxiv_updated: "2026-05-27"
summary: >-
  通常の標準因子と葉層の標準因子を混合した随伴葉層構造について、$t$-K半安定性がlog canonical特異点を強制することを示す。さらにCalabi--Yau型・一般型・Fano型における安定性とklt性の対応を確立し、Odakaのflag ideal法を葉層設定へ拡張する。
abstract_en: ""
summary_en: >-
  The paper relates singularities and K-stability for algebraically integrable foliations equipped with a canonical divisor interpolating between the ambient and foliated canonical classes. Semistability is shown to force log canonicity by adapting the flag-ideal method and constructing destabilizing compatible test configurations from negative mixed discrepancies. Log canonical Calabi--Yau and general-type structures satisfy the expected stability statements, while semistable adjoint Fano structures must be klt. The latter conclusion also constrains the singularities and birational type of the ambient variety.
abstract_ja: >-
  随伴葉層構造の $t$-K安定性について特異点判定を証明する。Odakaのflag idealによる混合Donaldson--Futaki不変量の特徴づけを葉層設定へ拡張し、K半安定性からlog canonical性を導く。また随伴Calabi--Yau型はK半安定でkltならK安定、log canonicalな随伴一般型は標準偏極に関してK安定であることを示す。随伴Fano型ではK半安定性からklt性が従い、台となる多様体がpotentially kltかつFano typeになる。
abstract_source_url: "https://arxiv.org/abs/2605.28140v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.28140v1](https://arxiv.org/abs/2605.28140v1)
- **著者:** Theodoros Stylianos Papazachariou
- **初回投稿日・最終更新日:** 2026年5月27日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

K安定性が多様体の特異点を制約するというOdakaの結果を、代数的可積分葉層を備えた随伴葉層構造へ拡張する。対象は多様体 $X$、葉層 $\mathcal F$、$0<t<1$ の三つ組で、通常の標準因子と葉層標準因子を

$$
K_{X,\mathcal F}^{[t]}=(1-t)K_X+tK_{\mathcal F}
$$

と混合する。

第一の結論は、任意のample偏極に関する $t$-K半安定性が、この混合標準因子で測るlog canonical性を強制することである。これは「安定性なら良い特異点」という通常のK安定性の原理が、台と葉層の寄与を補間する場合にも成立することを意味する。

さらに混合標準因子が数値的に自明、ample、anti-ampleとなるCalabi--Yau型、一般型、Fano型を分けて解析する。log canonicalなCalabi--Yau型は半安定で、kltなら安定、一般型は標準偏極で安定となる。一方Fano型の半安定性はlog canonicalより強いklt性まで強制する。

## 背景と問題設定

素因子 $E$ が葉層に横断的なら $\varepsilon(E)=1$、不変なら $0$ とし、通常のdiscrepancyと葉層discrepancyを補間したmixed log discrepancyを

$$
A_{X,\mathcal F}^{[t]}(E)
=t\bigl(a(E,\mathcal F)+\varepsilon(E)\bigr)
+(1-t)\bigl(a(E,X)+1\bigr)
$$

とする。すべての $E$ でこれが非負ならlog canonical、正ならkltである。問題は、この双有理的条件を $\mathcal F$-compatible test configurationの混合Donaldson--Futaki不変量の符号から検出できるか、というものである。

## 主結果

### 半安定性からlog canonical性へ（Theorem 1.1）

$(X,\mathcal F,t)$ をnormal projectiveで $\mathbf Q$-Gorenstein、$\mathcal F$ を代数的可積分、$0<t<1$ とし、$L$ をample $\mathbf Q$-Cartier因子とする。$(X,\mathcal F,L)$ が $t$-K半安定なら、$(X,\mathcal F,t)$ はlog canonicalである。

### 三つの符号の場合（Theorem 1.2）

$(X,\mathcal F,t)$ がlog canonicalなら、Introductionで次がまとめて主定理として述べられる。

1. $K_{X,\mathcal F}^{[t]}\equiv0$ の随伴Calabi--Yau型は任意のample偏極で $t$-K半安定であり、kltなら $t$-K安定である。
2. $K_{X,\mathcal F}^{[t]}$ がampleな随伴一般型は、$L=K_{X,\mathcal F}^{[t]}$ に関して $t$-K安定である。
3. $-K_{X,\mathcal F}^{[t]}$ がampleな随伴Fano型が $L=-K_{X,\mathcal F}^{[t]}$ に関して $t$-K半安定ならkltである。このとき $X$ はpotentially kltかつFano typeである。

## 証明の見取り図

Theorem 1.1ではflag idealにmixed $S$-coefficientを対応させ、その負性が混合Donaldson--Futaki不変量を負にすることを示す。log canonicalでないときは相対lc modificationで負のmixed discrepancyを持つ因子を抽出し、そこから不安定化する $\mathcal F$-compatible test configurationを構成する。

Calabi--Yau型と一般型では、任意のnormal compatible test configurationを共通モデルへ持ち上げ、不変量をcanonical項とdiscrepancy項へ分解する。log canonical性で後者が非負となり、前者はCalabi--Yau型では消え、一般型では非自明なconfigurationに対して正となる。Fano型ではmixed discrepancy 0の因子をqdlt modificationで抽出するとcanonical項が負になるため、非klt性が半安定性に矛盾する。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.28140v1](https://arxiv.org/abs/2605.28140v1)
- **Introduction:** Section 1, pp. 1–2
- **主要結果:** Theorems 1.1–1.2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
