---
layout: paper
title: $P$-trivial MMP, Zariski decompositions and minimal models for generalised pairs
title_ja: 非NQC一般化対のP自明MMPと極小モデル
authors: Zhengyu Hu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We develop $P$-trivial MMPs whose steps are trivial with respect to a given nef divisor $P$, and an inductive method for generalised pairs without the NQC assumption. For such an MMP, rational approximation with fixed nef data controls extremal intersection numbers and scaling numbers. Under a rationality hypothesis on $K_X+B+M-P$, we establish finiteness of adjunction coefficients under divisorial adjunctions, yielding a special termination theorem. This includes the case $P=0$. As applications, we prove that a projective lc g-pair $(X,B+M)$ of dimension $3$ has a minimal model if $K_X+B+M$ birationally admits a Nakayama--Zariski decomposition with nef positive part and either $K_X+B+M\equiv D\geq0$ or $M\equiv D\geq0$. The same conclusion holds for klt g-pairs in arbitrary dimension under these hypotheses, and for projective lc g-pairs of dimension $4$ with a birational Nakayama--Zariski decomposition with nef positive part and log abundant nef data. These results extend
  a theorem of Birkar and Hu to generalised pairs under the above hypotheses.
topic: algebraic-geometry
tags:
- minimal-model-program
- birational-geometry
- singularities
- positivity
arxiv_id: 2501.07551v2
arxiv_url: https://arxiv.org/abs/2501.07551
arxiv_submitted: '2025-01-13'
arxiv_updated: '2026-10-19'
summary: nefデータにNQC性を仮定しない一般化対について、固定nef因子に自明なMMPと随伴係数の有限性を構築する。nef正部分を持つ双有理Nakayama–Zariski分解に数値的有効性などを加え、任意次元klt、三次元lc、条件付き四次元lcの場合の極小モデルを得る。
abstract_en: ''
summary_en: Generalised pairs with nef data outside the NQC framework lack some standard numerical controls in minimal model theory. Hu replaces a rational decomposition of the nef data with controlled approximations of auxiliary divisors. The resulting P-trivial programs support induction along log canonical strata. The existence theorems retain explicit effectivity or abundance hypotheses, and the higher-dimensional weak-model conclusion is distinguished from a full minimal model.
abstract_ja: 非NQC一般化対に対し、与えられたnef因子Pと交わらないステップからなるMMPを構成し、随伴係数の有限性を通じて特殊停止の帰納法を可能にする。nef正部分を持つ双有理Nakayama–Zariski分解と、随伴因子またはnef部分の数値的有効性を仮定すると、任意次元のklt対と三次元のlc対に極小モデルが存在する。四次元lcの場合はnefデータのlog abundanceを仮定する。一般の高次元では弱極小モデルの結果を分けて述べる。
abstract_source_url: https://arxiv.org/abs/2501.07551
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2501.07551v2](https://arxiv.org/abs/2501.07551)
- **著者:** Zhengyu Hu
- **初回投稿日:** 2025-01-13
- **最終更新日:** 2026-10-19
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

一般化対は、境界因子に加えて別のモデル上のnefデータを含む対象であり、標準束公式や双有理幾何に現れる。従来の極小モデル理論では、そのnefデータがnefな有理Cartier因子の有限非負実結合になるNQC性を仮定することが多かった。本論文はこの仮定を外した場合を扱う。

著者は、固定したnef因子$P$に対して自明なMMPを構成し、lc層への随伴を低次元のMMPへ持ち上げる方法を与える。nefデータそのものを有理分解する代わりに、補助因子と境界を有理近似して極端交点数やscaling数を制御する点が中心である。

応用として、nef正部分を持つNakayama–Zariski分解に追加の有効性条件を加え、任意次元のklt対と三次元のlc対に極小モデルを得る。四次元lcではlog abundanceを用いる。一方、一般の高次元で得る弱極小モデルは通常の極小モデルと同じではなく、NQC性のない場合に両者を同一視しないことが重要である。

## 背景と問題設定

基礎体は標数零の非可算代数閉体である。一般化対$(X,B+M)$の随伴因子を$L=K\_X+B+M$と書く。極小モデルがあれば、ある双有理モデル$\pi:X'\to X$で

$$
P\_\sigma(\pi^*L)\text{ がnef}
$$

となるNakayama–Zariski正部分を得る。Conjecture 1.1はこの逆を問うが、本論文は無条件に解決するのではなく、数値的有効性などを置く。

非NQCの場合には、nefな因子でも$M\equiv D\ge0$と書けるとは限らない。Introductionの楕円曲線の積の例は、この追加条件が自動的でないことを示す。したがってnef性と数値的非消滅を区別する必要がある。

## 主結果

### P自明なMMPの構成（Theorem 1.3）

$(X/Z,B+M)$をQ-factorial dlt一般化対、$P$を$Z$上nefとする。非有理係数を持つ小数部分を$\lbrace P\rbrace \_{\mathrm{ir}}$とし、

$$
\operatorname{Supp}\lbrace P\rbrace \_{\mathrm{ir}}\subseteq\operatorname{Supp}\lbrace B\rbrace
$$

を仮定する。このとき十分大きな$\alpha$について、$K\_X+B+M+\alpha P$上の任意のMMPは$P$自明である。ここでは各ステップで動かす極端方向に対し$P$の交点が零となることが重要であり、nefデータのNQC性を要求しない。

### 数値的有効性の下での極小モデル（Theorem 1.4）

射影lc一般化対$(X,B+M)$の$L$が双有理にnef正部分を持つNakayama–Zariski分解を持ち、さらに

$$
K\_X+B+M\equiv D\ge0\quad\text{または}\quad M\equiv D\ge0
$$

とする。このとき、対がkltなら任意次元で、または$\dim X=3$ならlcのままで、極小モデルが存在する。非NQCなnefデータと非NQCな正部分の両方を許すことが従来の枠組みとの差である。

### 四次元lcへの拡張（Theorem 1.5）

射影lc一般化対の次元が4で、同じnef正部分条件を満たし、nefデータ$M'$がlog abundantなら極小モデルが存在する。log abundanceは適切なlog smoothモデルの各lc層への制限がabundantであることを要求し、全体での正値性だけではなく層上の制御を与える。

### lc層上の帰納法（Theorem 1.6）

Q-factorial dlt一般化対について$L=P+N$とし、$P$はnef、$N$は台にlc中心を含まない$\mathbb Q$-Cartierな$\mathbb Q$因子とする。双有理にampleな因子$A$でscalingする$P$自明MMPと、収縮されないlc中心$S$を考える。

誘導写像$S^i\dashrightarrow S^{i+1}$が十分先で$\lfloor B\_{S^i}\rfloor$上の同型になるなら、有限個の初期ステップを除き、小さいQ-factorial化$\widetilde S^i$上の$P^i|\_{\widetilde S^i}$自明MMPへ持ち上がる。scalingも$A^i$の誘導制限で行える。これは元のMMP全体の無条件停止ではなく、lc層の次元に関する帰納を可能にする定理である。

### 一般次元での弱極小モデル（Theorem 1.7）

射影lc一般化対がnef正部分条件を満たし、nefデータ$M'$または正部分がlog effectiveなら、弱極小モデルが存在する。log effectiveとは各層への制限が有効因子に数値同値であることをいう。さらに$\mathbf B\_-(K\_X+B+M)$がlc中心と交わらなければ、通常の極小モデルが存在するとIntroductionは述べる。

## 証明の見取り図

有理近似の誤差を境界へ吸収し、nefデータを固定したまま極端交点数に必要な正の隙間を得る。$P$自明性を保つことで$P$が定めるb因子は変わらず、差異の変化を有理な余り$N$で制御できる。局所Cartier指数と合わせると、随伴境界の係数が有限集合に入る。

これによりFujino型の特殊停止の帰納法をlc層に適用する。ただしlc中心近傍での停止だけでは足りず、固定した$\alpha$に対する$L+\alpha P$のMMPへ移る「degeneration」が別に必要である。Introductionはこの二段階を明確に区別し、$P=P\_\sigma(L)$の場合に極小モデルへ到達する仕組みを説明する。

## 原論文との対応

- **Abstractページ:** [$P$-trivial MMP, Zariski decompositions and minimal models for generalised pairs](https://arxiv.org/abs/2501.07551)
- **Introduction:** [PDF](https://arxiv.org/pdf/2501.07551v2) — Section 1, pp. 1–5（Section 2直前まで）。
- **Introduction中で言及された主要結果:** Conjecture 1.1、Theorems 1.3–1.7。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2501.07551v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
