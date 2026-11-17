---
layout: paper
title: Log canonical thresholds at infinity
title_ja: 無限遠のlog canonical thresholdと大域的Demailly近似
authors: Carles Bivià-Ausina, Alexander Rashkovskii
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: The paper considers a global version of the notion of log canonical threshold for plurisubharmonic functions $u$ of logarithmic growth in $\mathbb{C}^n$, aiming at description of the range of all $p>0$ such that $e^{-u}\in L^p(\mathbb{C}^n)$. Explicit formulas are obtained in the toric case. By considering Bergman functions of corresponding weighted Hilbert spaces, a new polynomial approximation of plurisubharmonic functions of logarithmic growth with control over its singularities and behavior at infinity (a global version of Demailly's approximation theorem) is established. Some application to tame polynomial maps are given.
topic: several-complex-variables
tags:
- pluripotential-theory
- l2-methods
- singularities
arxiv_id: 2601.23118v3
arxiv_url: https://arxiv.org/abs/2601.23118
arxiv_submitted: '2026-01-30'
arxiv_updated: '2026-11-15'
summary: 対数増大する多重劣調和関数の指数関数が無限遠で可積分となる境界を導入し、局所的なlog canonical thresholdとの違いを調べる。toricな場合の凸幾何による記述と、有限点の特異性と無限遠の増大を同時に制御する多項式Bergman近似を与える。
abstract_en: ''
summary_en: Integrability near a finite singularity and integrability at infinity impose different demands on a plurisubharmonic weight. This paper studies the latter for weights of logarithmic growth, with explicit descriptions in the toric setting. Polynomial weighted Hilbert spaces supply a global approximation procedure that keeps track of both regimes. Examples also limit what the total Monge–Ampère mass can tell us about the threshold.
abstract_ja: 対数増大する多重劣調和関数に対し、無限遠で指数関数が二乗可積分となるパラメータの下限をlog canonical threshold at infinityとして研究する。toric関数や無限遠でNewton非退化な多項式写像では明示的な記述を得る。また重み付き多項式Hilbert空間のBergman関数を用い、局所特異性と無限遠の挙動を制御しながら元の関数へ近似する。局所理論と同じ単調性やMonge–Ampère質量との普遍的関係を一般に仮定できない点も示す。
abstract_source_url: https://arxiv.org/abs/2601.23118
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2601.23118v3](https://arxiv.org/abs/2601.23118)
- **著者:** Carles Bivià-Ausina, Alexander Rashkovskii
- **初回投稿日:** 2026-01-30
- **最終更新日:** 2026-11-15
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

局所的なlog canonical thresholdは、特異点近くで指数関数がどこまで可積分であるかを測る。本論文は、空間全体に定義された多重劣調和関数について、無限遠の可積分性を測る対応物を調べる。

無限遠では、関数の増大は可積分性を助ける一方、遠方にも現れる負の特異性は妨げとなる。このため局所理論の議論をそのまま反転すれば済むわけではない。著者らはexhaustiveな関数やtoric関数に焦点を当て、指標図形による具体的な記述を与える。

もう一つの柱は大域的な多項式近似である。重み付きHilbert空間のBergman関数から近似を構成し、有限点の特異性と無限遠の増大を同時に扱う。さらにMonge–Ampère質量との比較に対する反例を示し、局所理論との相違を明確にする。

## 背景と問題設定

$\mathcal L(\mathbb C^n)$ を対数増大するpsh関数のクラスとする。無限遠の閾値は

$$
c\_\infty(u)=\inf\lbrace c>0:e^{-cu}\text{ が無限遠で二乗可積分}\rbrace
$$

で定義される。「無限遠で」とは適当なコンパクト集合の外側で、という意味である。有限点での閾値が上限で定義されることとは区別する。

一般には $u$ が遠方で $-\infty$ に近づく可能性があり、ある $c$ での可積分性からすべての大きい $c'$ での可積分性が従うかも未解決とされる。補助量 $\widehat c\_\infty(u)=c\_\infty(\max\lbrace u,0\rbrace )$ は $c\_\infty(u)$ 以下だが一致するとは限らない。$u(z)\to+\infty$ となるexhaustiveなクラス $\mathcal L\_\ast (\mathbb C^n)$ では一致する。

## 主結果

### toric関数と無限遠の乗数（Theorems 7.2, 8.5の紹介）

Introductionでは概略として次のように述べられている。exhaustiveな関数について、対数的indicator $\Psi\_u$ を用いた

$$
c\_\infty(u)\ge c\_\infty(\Psi\_u)
$$

が成立し、toricな場合には等号となる。indicator diagramに対するKiselman・Howald型の公式が得られ、無限遠でNewton非退化な多項式写像にも拡張される。具体的な凸幾何の公式はIntroductionに記載されないため補わない。

また、$|P|e^{-u}$ が無限遠で二乗可積分となる多項式 $P$ の空間 $\mathcal P\_\infty(u)$ を考える。これは有限次元ベクトル空間であり、局所の乗数イデアルとは異なってイデアルではない。toricでexhaustiveな場合には、単項式生成元をindicator diagramから記述する。

### 大域的Bergman近似（Theorem 9.2の紹介）

Introductionでは概略として次のように述べられている。

$$
\Lambda(z)=\tfrac12\log(1+|z|^2),\qquad \kappa>n
$$

を固定し、$|P|e^{-mu-\kappa\Lambda}\in L^2(\mathbb C^n)$ となる多項式のHilbert空間 $\mathcal P(mu+\kappa\Lambda)$ のBergman関数を $B\_m$ とする。このとき

$$
u\_m=\frac{1}{2m}\log B\_m\longrightarrow u
$$

が各点および $L^1\_{\mathrm{loc}}$ で成立する。近似は局所特異性と無限遠の挙動も制御し、とくに $\liminf\_{|z|\to\infty}u(z)/\log|z|>0$ の場合には無限遠の閾値も制御する。Introductionが述べる範囲を超えた誤差評価は加えない。

### 全Monge–Ampère質量だけでは閾値を捉えられない（Example 10.4）

任意の $N>1$ に対してtoricなexhaustive関数 $u\_N,v\_N$ があり、

$$
c\_\infty(u\_N)=c\_\infty(v\_N)=1,\qquad
\int\_{\mathbb C^n}(dd^cu\_N)^n=\frac2N,\qquad
\int\_{\mathbb C^n}(dd^cv\_N)^n=2N
$$

となる例がIntroductionで示される。従って閾値を固定しても全質量は非常に小さくも大きくもなり、局所の残留質量との比較を無条件に大域化できない。indicator diagramがlower setとなる場合の追加評価は別途得られる。

## 証明の見取り図

toricな状況では関数の増大と可積分性をindicator diagramの凸幾何へ移す。大域的近似には、多項式の次数を外から固定する代わりに可積分性で定めたHilbert空間を用いる。Introductionは、追加の次数制限を課す既存構成では元の関数自身ではなく別のenvelopeへ収束し得る点を説明する。開性・半連続性・制限公式などは今後の課題として残される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2601.23118)
- **Introduction:** [PDF](https://arxiv.org/pdf/2601.23118v3) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Introductionで紹介されるTheorems 7.2, 8.5, 9.2、Example 10.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2601.23118v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
