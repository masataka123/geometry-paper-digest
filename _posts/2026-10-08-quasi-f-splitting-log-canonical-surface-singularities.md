---
layout: paper
title: Quasi-$F$-splitting versus log canonicity
title_ja: quasi-F-splittingとlog canonical特異点の比較・二次元分類
authors: Kenta Sato, Shunsuke Takagi, Shou Yoshikawa
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
arxiv_abstract: |-
  In this paper, we investigate the relationship between quasi-$F$-splitting and log canonicity. We show that if a numerically $\mathbb{Q}$-Gorenstein normal singularity is quasi-$F^e$-split for every $e\geq 1$, then it is numerically log canonical. In dimension two, we prove the converse under the condition that the Gorenstein index is not divisible by the characteristic $p$. We also classify two-dimensional quasi-$F$-split normal singularities.
topic: algebraic-geometry
tags:
- singularities
- positive-characteristic
- minimal-model-program
- multiplier-ideals-extension
arxiv_id: 2607.02218v2
arxiv_url: https://arxiv.org/abs/2607.02218v2
arxiv_submitted: '2026-07-02'
arxiv_updated: '2026-10-07'
summary: |-
  Wittベクトルを用いたquasi-F-splittingと、双有理幾何のlog canonical性を比較する。全てのFrobenius反復に対する条件から数値的log canonical性を導き、二次元では指数と標数の仮定の下で逆向きも示す。二次元正規特異点の分類により、標数3より大きい場合には両者の同値性を得る。
abstract_en: ''
summary_en: |-
  Witt-vector splitting offers a broader positive-characteristic condition than ordinary Frobenius splitting. The paper connects this condition to discrepancies, first through an implication valid in a numerically Cartier setting and then through a converse for surface pairs. Its surface classification makes the small-characteristic restrictions explicit. The distinction between one splitting condition and splitting for every Frobenius iterate is essential in the general statement.
abstract_ja: |-
  F-purityより広い特異点を捉えるquasi-F-splittingが、log canonical性とどこまで対応するかを調べる。数値的にQ-Gorensteinな状況では、全ての正整数eについてquasi-F^e-splitであることから数値的log canonical性を得る。二次元では、剰余体の完全性と標準境界因子の指数が標数で割れないことを仮定して逆方向を示す。さらに二次元quasi-F-split正規特異点を分類し、小標数で現れる例外を双対グラフと標数条件で記述する。
abstract_source_url: https://arxiv.org/abs/2607.02218v2
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.02218v2](https://arxiv.org/abs/2607.02218v2)
- **著者:** Kenta Sato, Shunsuke Takagi, Shou Yoshikawa
- **初回投稿日:** 2026-07-02
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.AG（主分類）、math.AC（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正標数の特異点には、Frobenius写像の分裂を調べる代数的な見方と、双有理モデル上のdiscrepancyを調べる幾何的な見方がある。F-pureならlog canonicalになるという既知の対応に対し、本論文はWittベクトルで一般化したquasi-F-splittingを使うことで、より広い特異点を扱う。

一般次元では、全ての反復に対するquasi-F-splittingを仮定し、数値的にQ-Cartierという条件の下で数値的log canonical性を導く。逆方向は二次元で調べ、標準境界因子のCartier指数が標数と互いに素なら、lc対からpurely quasi-F^e-splittingを得る。

さらに二次元正規特異点を分類することで、quasi-F-splitであることと、全ての反復についてquasi-F^e-splitであることを同値にする。小標数では双対グラフの型に例外が現れる一方、標数3より大きい場合にはlog canonical性との同値へ整理できる。これは任意次元で一回の分裂だけを仮定してよいという意味ではない。

## 背景と問題設定

<p>
$R$ を標数 $p>0$ のF-finite被約局所環とする。quasi-F-splitとは、ある長さ $n\ge1$ のWittベクトル環に対し、$W_nR$-加群写像 $\varphi:F_*W_nR\to R$ を取れて、
</p>

<div>
$$
\varphi\circ F=R^{n-1}:W_nR\longrightarrow R
$$
</div>

<p>
となることである。右辺は制限写像であり、$n=1$ では通常のF-purityになる。Introductionは、楕円曲線のアフィン錐は常にquasi-F-splitだが、F-pureになるのは楕円曲線がordinaryの場合に限るという例で差を説明する。
</p>

## 主結果

### 分裂から数値的log canonical性へ（Theorem A）

<p>
$R$ をF-finite Noether正規整域、$X=\operatorname{Spec}R$ とする。有効な $\mathbb Q$-Weil因子 $\Delta$ は $\lfloor\Delta\rfloor$ が被約で、$K_X+\Delta$ は数値的に $\mathbb Q$-Cartierと仮定する。全ての $e\ge1$ に対し
</p>

<div>
$$
\left(R,\frac{p^e-1}{p^e}\Delta\right)
\quad\text{がquasi-}F^e\text{-split}
$$
</div>

<p>
なら、$(X,\Delta)$ は数値的log canonicalである。特に $K_X+\Delta$ が $\mathbb Q$-Cartierで $(R,\Delta)$ が全ての $e$ についてquasi-$F^e$-splitなら、通常のlog canonical性が成り立つ。境界の係数をわずかに減らす上式と、全ての $e$ という量化が中心的な仮定である。
</p>

### 二次元での逆方向（Theorem B）

<p>
$R$ は二次元F-finite正規局所整域で剰余体は完全、$\Delta$ は有効な $\mathbb Q$-Weil因子、$(X,\Delta)$ はlcとする。$K_X+\Delta$ のCartier指数が $p$ で割れなければ、対は全ての $e\ge1$ についてpurely quasi-$F^e$-splitである。これはTheorem 6.12とRemark 6.13に対応する。
</p>

### 二次元quasi-F-split特異点の分類（Theorem C）

<p>
二次元F-finite Noether正規局所整域で剰余体が完全なら、quasi-$F$-splitであることと、全ての $e\ge1$ についてquasi-$F^e$-splitであることは同値である。さらに、lcであって次のいずれかを満たすこととも同値である。
</p>

- log terminalである。
- 有理特異点ではない。
- $p\ne2,3$ で、双対グラフが型 $(2,3,6)$ のstar-shapedである。
- $p\ne3$ で、型 $(3,3,3)$ のstar-shapedまたはtwisted star-shapedである。
- $p\ne2$ で、型 $\ast\widetilde D_{n+3}$ またはtwisted $\ast\widetilde D_{n+3}$（$n\ge1$）、あるいは型 $(2,4,4)$ のstar-shapedまたはtwisted star-shapedである。

<p>
双対グラフの名称は原論文の分類記法を用いた。Introductionは特に、$p>3$ では二次元F-finite正規局所整域について、quasi-$F$-splitting、全てのquasi-$F^e$-splitting、lc性が同値となり、この帰結では剰余体が不完全でもよいと述べる（Theorem 6.20への言及）。
</p>

## 証明の見取り図

<p>
Theorem Aでは、微小な負の摂動後にquasi-test idealが自明になることを示す。次にquasi-test idealと乗数イデアルの比較を数値的 $\mathbb Q$-Cartierの場合へ拡張する。これにより乗数イデアルの自明性から数値的lc性を取り出す。
</p>

<p>
Theorem Bではdlt blow-upの非klt集合に注目し、一次元SNCスキーム上の対へ帰着する。指数が $p$ と互いに素という仮定が、標準境界因子の適切な倍数の線形自明性を与える。Witt Frobeniusの余核の大域切断について逆極限の消滅を示すことが、分裂を得る核心として説明される。
</p>

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2607.02218v2
- **Introduction:** Section 1、pp. 2–4。Abstractはp. 1。
- **主要定理:** Theorems A、B、C。本文のTheorems 5.4、6.12、6.18とRemark 6.13に対応し、標数 $p>3$ の帰結はTheorem 6.20への言及。
- **論文構成:** Sections 3–5に分裂・quasi-test ideal・lc性、Section 6に二次元の逆方向と分類を配置する。
- **確認バージョン:** v2。全証明の検証は行っていない。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction
