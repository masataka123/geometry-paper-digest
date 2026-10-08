---
layout: paper
title: A Thullen-type Extension Theorem for Nakano Semi-Positive Holomorphic Vector Bundles
title_ja: Nakano半正値正則束のThullen型反射的層への拡張
authors: V. Delécluse, S. Ivashkovych
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: |-
  We prove a Thullen-type extension theorem for hermitian bundles with Nakano semi-positive curvature. As an intermediate result we establish the $L^2$-estimates for the $\dbar$-equation in hermitian vector bundles over a non-complete K\"ahler manifolds. Minor corrections.
topic: several-complex-variables
tags:
- positivity
- vector-bundles-sheaves
- l2-methods
- multiplier-ideals-extension
- complex-analytic-spaces
arxiv_id: 2608.00628v2
arxiv_url: https://arxiv.org/abs/2608.00628v2
arxiv_submitted: '2026-08-01'
arxiv_updated: '2026-10-06'
summary: |-
  超曲面の各枝に少しずつ接するThullen型領域上のNakano半正値正則Hermitian束を、全空間上の反射的coherent解析層として拡張する。拡張に対応する切断には局所L²評価も伴う。非完備Kähler多様体上のL²解法と、高次元へ拡張する議論を組み合わせる。
abstract_en: ''
summary_en: |-
  Positivity of a bundle metric is used to extend a sheaf across a partially missing hypersurface. The extension is reflexive and coherent, which is a weaker conclusion than extension as a vector bundle in higher dimensions. The proof combines square-integrable solutions of the bar-partial equation with the construction of enough local sections. A separate dimension-raising argument addresses the passage beyond the surface case.
abstract_ja: |-
  複素多様体から超曲面の一部を除いた領域で定義された正則束が、どのような正値性の下で全体へ延びるかを扱う。領域が超曲面の各枝と交わり、束がNakano半正値のHermitian計量を持つとき、正則切断の層は全空間上の反射的coherent解析層へ拡張する。Introductionは局所L²性を含む形で定理を述べ、非完備Kähler多様体上のbar-partial方程式の評価、十分な切断の構成、次元を上げる方法を三つの主要段階として説明する。
abstract_source_url: https://arxiv.org/abs/2608.00628v2
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.00628v2](https://arxiv.org/abs/2608.00628v2)
- **著者:** V. Delécluse, S. Ivashkovych
- **初回投稿日:** 2026-08-01
- **最終更新日:** 2026-10-06
- **主分類・副分類:** math.CV（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正則関数には、欠けた集合を越えて延長できるという複素解析特有の性質がある。ベクトル束について同じ問題を考えると、曲率の正値性と、延長先で許す特異性の種類が重要になる。本論文はNakano半正値な正則Hermitian束を対象に、Thullen型領域からの拡張を証明する。

得られる拡張は、全空間上の反射的coherent解析層である。高次元で局所自由なベクトル束として延びるとまでは述べない。一方、複素二次元では反射的層が局所自由となるため、束としての拡張が得られる。この次元による結論の違いを区別する必要がある。

証明の主要な解析的道具は、非完備Kähler多様体上でも使えるL²評価付きのbar-partial方程式の解法である。それを半正値曲率から十分な正則切断を作る議論につなぎ、最後に高次元へ移す。Introductionは、二次元で知られていた議論から高次元の場合が直ちに従うわけではない点を明示する。

## 背景と問題設定

<p>
$X$ を複素多様体、$Y$ を純余次元1の複素部分多様体とする。開集合 $G$ が $X\setminus Y$ を含み、$Y$ の各枝と交わるとき、$G$ をThullen型領域と呼ぶ。同じことを
</p>

<div>
$$
G=(X\setminus Y)\cup U
$$
</div>

<p>
と書ける。ここで $U$ は $Y$ の各枝に交わる開集合である。各枝に全く接しない単なる補集合とは仮定が異なる。
</p>

<p>
束のNakano半正値性はChern接続の曲率に対する半正値条件である。主定理で $X$ 全体にKähler性や完備性を要求しているわけではなく、Kähler計量は証明のL²解析で用いられる。
</p>

## 主結果

### 反射的coherent層としての拡張（Theorem 1）

<p>
Thullen型領域 $G\subset X$ 上にNakano半正値な正則Hermitian束 $E$ があるとする。その正則切断の層を $\mathcal E$ とすると、$X$ 上の反射的coherent解析層 $\widetilde{\mathcal E}$ と同型
</p>

<div>
$$
\widetilde\Phi:\widetilde{\mathcal E}|_G\xrightarrow{\ \simeq\ }\mathcal E
$$
</div>

が存在する。すなわち、元の束の正則切断の構造を保持した解析層として全体へ延ばせる。

<p>
定理はさらに、この同型で対応する切断が $X$ のコンパクト集合に沿ってL²性を持つことを含む。Introductionの記法では、対応する切断 $\widetilde s$ と任意の $K\Subset X$ について
</p>

<div>
$$
\widetilde\Phi\bigl(\widetilde s|_{K\cap G}\bigr)\in L^2(K\cap G,E)
$$
</div>

と表される。単に抽象的なcoherent層を付け足すだけでなく、元のHermitian計量に関する積分可能性も制御する結論である。

### 既知の二次元の場合との関係

Introductionは、Siuが一般の場合を予告し、複素二次元での証明を概説していたと説明する。本論文は次元を上げるための方法を別に用意する。二次元では拡張が束となるが、高次元での主定理の結論は反射的層であり、その違いを維持して読むのが適切である。

## 証明の見取り図

<p>
第一段階ではHörmander–Demaillyの結果を状況に合わせ、非完備Kähler多様体上のHermitian束でL²評価付きの $\bar\partial$ 方程式を解く。第二段階ではSiuの着想を用い、半正値曲率を持つ束に十分多くの正則切断を作る。
</p>

第三段階は周囲の多様体の次元を上げる議論であり、Section 3に置かれる。Introductionはこの三段階を説明しているが、細かな評価式や帰納構成までは展開しないため、ここでは後続の証明を再構成しない。

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2608.00628v2
- **Introduction:** Sections 1.1–1.2、pp. 1–2冒頭。
- **主要定理:** Theorem 1。証明の三段階はSection 1.2。
- **論文構成:** Section 2にL²解析と切断の構成、Section 3に次元を上げる方法を配置する。
- **確認バージョン:** v2。後続の技術的評価と証明全体は検証していない。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction
