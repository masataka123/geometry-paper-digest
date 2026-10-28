---
layout: paper
title: Finding large families of rational curves through Bend-and-Break
title_ja: Bend-and-Breakによる大きな有理曲線族の構成
authors: Eric Jovinelly, Brian Lehmann, Eric Riedl
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We present a new construction that allows us to break off large-degree rational curves from families of higher genus curves. Our construction and results deepen the connection between rational curves and positivity of the anticanonical divisor. Specifically, we show that varieties with large Fujita invariant admit large families of rational curves. We also construct free rational curves on certain singular Fano varieties. As an explicit consequence of our results, we prove that for a general Fano hypersurface of index at least 3, all spaces of genus g curves of sufficiently large degree have the expected dimension.
topic: algebraic-geometry
tags:
- birational-geometry
- fano-varieties
- positivity
- singularities
- moduli
arxiv_id: 2608.27696v1
arxiv_url: https://arxiv.org/abs/2608.27696
arxiv_submitted: '2026-08-27'
arxiv_updated: '2026-08-27'
summary: 高種数曲線の支配的な族から、族の次元を減らさずに有理曲線族を取り出すBend-and-Breakを構成する。特異Fano多様体の自由有理曲線、Fujita不変量と曲線の変形次元の対応、指数3以上の一般Fano超曲面上の曲線空間へ応用する。
abstract_en: ''
summary_en: This paper refines bend-and-break so that the rational curves produced retain quantitative information about a starting family. The resulting control links the size of curve families to the Fujita invariant. It supplies free curves in several singular Fano settings and very free representatives of interior nef curve rays on smooth Fanos. Applications to general hypersurfaces exclude subvarieties with unexpectedly large curve families.
abstract_ja: 射影多様体上の支配的な曲線族から、元の族以上の次元で変形する有理曲線族を構成する。取り出した曲線との差は有効1-cycleと代数的に同値になる。これを特異Fanoの正則部分の自由曲線、Fujita不変量の曲線による特徴づけ、一般Fano超曲面上での曲線族の次元評価と高次数での自由性へ応用する。
abstract_source_url: https://arxiv.org/abs/2608.27696
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.27696v1](https://arxiv.org/abs/2608.27696)
- **著者:** Eric Jovinelly, Brian Lehmann, Eric Riedl
- **初回投稿日:** 2026-08-27
- **最終更新日:** 2026-08-27
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

古典的Bend-and-Breakは、高種数曲線の族を退化させて有理成分を取り出すが、得られる曲線の次数や変形の大きさを細かく制御することは難しい。本論文は、元の曲線族の豊かさを有理曲線側へ保つ構成を与える。

その結果、反標準因子の正値性と大きな有理曲線族の関係が明確になる。特異Fano多様体では特異集合との交わりを制限した高次数の有理曲線を作り、特定の条件下では正則部分の自由曲線を得る。

さらにFujita不変量を曲線族の変形次元と結び付け、一般Fano超曲面で余分に大きく変形する曲線を集める部分多様体が存在しないことを示す。固定種数で十分高次数の曲線の一般変形が自由になることが、期待次元の結果を支える。

## 背景と問題設定

基礎体は標数零の代数閉体とする。$\operatorname{Mor}(C,Y)$は固定した滑らかな射影曲線$C$から$Y$への射の空間である。滑らかな$Y$とbigかつnefな$\mathbb Q$-Cartier因子$L$に対するFujita不変量は

$$
a(Y,L)=\min\lbrace t\in\mathbb R:K\_Y+tL\text{ is pseudo-effective}\rbrace
$$

である。大きな$a(Y,L)$は大きく変形する曲線族を予測するが、その逆方向を定量的に実現することが課題となる。

## 主結果

### 変形次元を保つbreaking（Theorem 1.1）

$Y$を射影多様体、$M\subset\operatorname{Mor}(C,Y)$を支配的な射の族で$\dim M>\dim Y$とする。このとき支配的な有理曲線族$N\subset\operatorname{Mor}(\mathbb P^1,Y)$が存在して

$$
\dim N\geq\dim M
$$

となり、対応する$s,f$について$s\_\ast C-f\_\ast\mathbb P^1$は有効1-cycleと代数的に同値になる。

### 特異点との交わりを制御する曲線（Theorem 1.2）

次元$n\geq3$のterminal Fano多様体と一般点$p$に対し、任意の整数$\Theta\geq1$について$p$を通る$s:\mathbb P^1\to X$が存在し、

$$
\Theta\leq-K\_X\cdot s\_\ast\mathbb P^1\leq\Theta+n
$$

を満たし、特異集合に出会う回数は高々$n-2$である。正則部分だけを通る自由曲線の一般的存在予想より弱いが、次数によらず特異点との交わりを抑える。

### 正則部分の自由曲線（Theorem 1.3）

terminal Fanoが論文のTheorem 5.4で指定される意味でsmoothable、またはLCIQ特異点を持つ四次元多様体なら、正則部分に自由有理曲線が存在する。Introductionではsmoothableの場合の条件を概略として述べているため、任意の平滑化へ拡張しない。terminal Fano三次元ではvery free曲線も得られ、Tianの結果と合わせてシンプレクティック有理連結な解消を得る（Corollary 1.4）。

### nef曲線錐の内部（Theorem 1.5）

滑らかなFano多様体では、nef曲線錐$\operatorname{Nef}\_1(X)$の内部にある任意の有理rayが、very free有理曲線の類で生成される。

### Fujita不変量に近い変形次元（Theorem 1.7）

$Y$が滑らかなuniruled射影多様体、$L$がbigかつnefなCartier因子、$C$が種数$g$の滑らかな射影曲線なら、支配的な曲線族を与える既約成分$N$が無限個存在して

$$
\dim N>a(Y,L)(L\cdot s\_\ast C)-2g\dim Y
$$

を満たす。特に有理曲線族の情報からFujita不変量を読み取れる。

### 過剰な変形を持つ部分多様体の判定（Theorem 1.8）

滑らかなFano $X$では、すべての真の閉部分多様体$Y$について$a(Y,-K\_X|\_Y)\leq1$であることと、ある滑らかな射影曲線$C$について$\operatorname{Mor}(C,X)$の全成分の次元が期待次元を高々$g(C)\dim X$だけ上回ることが同値である。さらに「ある$C$」は「すべての$C$」と同値になる。

### 一般超曲面の非集積性（Theorem 1.9）

一般の次数$d\leq n-2$の超曲面$X\subset\mathbb P^n$では、すべての真の閉部分多様体$Y$に対し

$$
a(Y,-K\_X|\_Y)<1
$$

となる。Fano指数が少なくとも三となる範囲で、曲線族の集積を生む部分多様体を排除する。

### 曲線空間の次元と自由性（Theorem 1.10・Corollary 1.11）

同じ超曲面上の任意の曲線$s:C\to X$について

$$
\dim\_{[s]}\operatorname{Mor}(C,X)\leq-K\_X\cdot s\_\ast C+n-1
$$

が成り立つ。また種数$g$の二次関数$d(g)$が存在し、次数が$d(g)$以上の曲線は一般変形で自由となる。ここで高種数曲線の自由性は$s^\ast T\_X$の非零商の最小傾きが少なくとも$2g$という意味である。

## 証明の見取り図

一般点で一般因子に高次接触する曲線族を用意し、その接触情報を連続ブローアップの例外因子の塔に記録する。この双有理模型上でbreakingを行い、有理成分と例外因子の交わりを追うことで変形次元の下界を得る。各応用は、この構成を特異Fanoの曲線理論やFujita不変量の既知の上界と組み合わせるものである。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2608.27696)
- **Introduction:** [PDF](https://arxiv.org/pdf/2608.27696v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3, 1.5, 1.7–1.10；Corollaries 1.4, 1.11；Definition 1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2608.27696v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
