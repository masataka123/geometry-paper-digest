---
layout: paper
title: Abundance theorem for minimal compact K\"ahler manifolds with vanishing second Chern class
title_ja: 第2 Chern類が消滅する極小コンパクトKähler多様体のabundance定理
authors: Masataka Iwai, Shin-ichi Matsumura
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.DG
arxiv_abstract: |-
  In this paper, for compact K\"ahler manifolds with nef cotangent bundle, we study the abundance conjecture and the associated Iitaka fibrations. We show that, for a minimal compact K\"ahler manifold, the second Chern class vanishes if and only if the cotangent bundle is nef and the canonical bundle has the numerical dimension $0$ or $1$. Additionally, in this case, we prove that the canonical bundle is semi-ample. Furthermore, we give a relation between the variation of the fibers of the Iitaka fibration and a certain semipositivity of the cotangent bundle.
topic: algebraic-geometry
tags:
- chern-classes
- positivity
- vector-bundles-sheaves
- minimal-model-program
arxiv_id: 2205.10613v2
arxiv_url: https://arxiv.org/abs/2205.10613v2
arxiv_submitted: '2022-05-21'
arxiv_updated: '2026-10-07'
summary: |-
  第2 Chern類の消滅を、余接束のnef性と標準束の数値次元が0または1であることによって特徴づけ、その場合のコンパクトKähler多様体に対してabundanceを証明する。射影的な場合には、余接束のFujita分解を用いて飯高ファイブレーションの局所自明性とファイバーの変動を記述する。
abstract_en: ''
summary_en: |-
  The paper examines how a small numerical dimension of the canonical bundle interacts with positivity of the cotangent bundle. For a compact Kähler manifold with nef canonical bundle, vanishing of the second Chern class is shown to be equivalent to nefness of the cotangent bundle together with numerical dimension at most one. The authors establish semiampleness in this situation. In the projective setting, they also relate the variation of the Iitaka fibration to the Fujita decomposition and formulate criteria for local triviality.
abstract_ja: |-
  コンパクトKähler多様体の標準束がnefであるとき、第2 Chern類の消滅は、余接束がnefで標準束の数値次元が0または1であることと同値になる。論文はこの場合に標準束の半豊富性を証明し、関連する飯高ファイブレーションを考察する。さらに、射影多様体の余接束のFujita分解とHermitian平坦性・半正値性を通じて、ファイバーが変動しない条件および変動の次元を明らかにする。
abstract_source_url: https://arxiv.org/abs/2205.10613v2
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2205.10613v2](https://arxiv.org/abs/2205.10613v2)
- **著者:** Masataka Iwai, Shin-ichi Matsumura
- **初回投稿日:** 2022-05-21
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.AG（主分類）、math.CV, math.DG（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

abundance予想は、標準束がnefなコンパクトKähler多様体では、その十分高い冪が大域切断で生成されると予測する。この論文は、第2 Chern類が消滅する場合を、余接束の正値性と標準束の数値次元の条件に翻訳することで扱う。

中心となるのは、極小性に相当する標準束のnef性の下で、第2 Chern類の消滅と「余接束がnefで、標準束の数値次元が0または1」が同値になるという特徴づけである。著者らはこの条件から標準束の半豊富性を導く。射影多様体に限らず、コンパクトKähler多様体に適用できる点が重要である。

後半の主題は、半豊富性によって得られる飯高ファイブレーションの変動である。射影的な場合、有限エタール被覆後にアーベル群スキームとなるこの族について、余接束のFujita分解の平坦部分と相対余接束の一致を局所自明性と結びつける。単なるnef性から局所自明性が従うとは主張していない。

## 背景と問題設定

$\nu(K_X)$を標準束の数値次元とする。IntroductionのConjecture 1.1は、$K_X$がnefなら半豊富であるという一般予想であり、論文が全次元・無条件で解決する対象ではない。今回扱う条件では、$\nu(K_X)<\dim X$のとき正則Euler標数が消えるため、Euler標数の非消滅を仮定する従来の手法とは異なる範囲を扱う。

非正の正則双断面曲率は余接束のnef性より強い条件である。この強い曲率条件の下では飯高ファイブレーションの局所自明性が既知である一方、余接束がnefという条件だけではファイバーが変動しうる。著者らは、曲率の核による葉層の代わりに、余接束のFujita分解に現れる平坦部分を調べる。

## 主結果

### Chern類消滅の特徴づけ（Theorem 1.2）

$K_X$がnefなコンパクトKähler多様体$X$について、次が同値である。

<div>
$$
c_2(X)=0\ \text{in }H^{2,2}(X,\mathbb R)
\quad\Longleftrightarrow\quad
\Omega_X\text{ が nef},\qquad \nu(K_X)\in\lbrace 0,1\rbrace .
$$
</div>

消滅を仮定するのは単なる一つの交点数ではなく、ここでは実$(2,2)$コホモロジー類である。極小性とChern類の情報が、余接束全体のnef性を強制する。

### 半豊富性（Theorem 1.3）

コンパクトKähler多様体$X$の余接束$\Omega_X$がnefで、$\nu(K_X)=0$または$1$なら、$K_X$は半豊富である。Theorem 1.2と合わせると、nefな標準束と消滅する第2 Chern類を持つ多様体についてabundanceが成立する。数値次元0の場合の既知結果を含み、数値次元1の特殊な幾何を捉える。

### 飯高ファイブレーションの局所自明性（Theorem 1.4）

滑らかな射影多様体$X$について、$\Omega_X$がnef、$K_X$が半豊富であると仮定する。有限エタール被覆を取って飯高ファイブレーション$f:X\to Y$をアーベル群スキームとしたとき、次の三条件は同値である。

<div>
$$
\mathcal F=\Omega_{X/Y}
\quad\Longleftrightarrow\quad
\Omega_{X/Y}\text{ が Hermitian 平坦}
\quad\Longleftrightarrow\quad
f\text{ が局所自明}.
$$
</div>

ここで$\mathcal F$は余接束のFujita分解の平坦部分である。この定理は、正値性の分解が族の幾何的な非変動性を検出することを示す。

### 変動の次元と半正値性（Theorem 1.5）

Theorem 1.4と同じ状況で、Fujita分解を

<div>
$$
0\longrightarrow\mathcal H\longrightarrow\Omega_X
\longrightarrow\mathcal F\longrightarrow0
$$
</div>

と書く。$\mathcal F$はHermitian平坦、$\mathcal H$はgenerically ampleである。一般のファイバー$X_y$上の$\mathcal H|_{X_y}$に含まれるHermitian平坦部分束の最大階数を$l$とし、族のモジュライ像を$Z$とすると、

<div>
$$
\dim Z=\operatorname{rk}\mathcal H-l
$$
</div>

が成り立つ。また、$\mathcal O_{\mathbb P(\Omega_X)}(1)$が半正値Chern曲率を持つ滑らかなHermitian計量を許せば、$f$は局所自明になる。ここでの半正値性を、単なるnef性と取り違えてはならない。

### 反射的層に対する判定（Theorem 1.6）

$n$次元コンパクトKähler多様体$(X,\omega)$上の反射的連接層$\mathcal E$について、任意のKähler形式$\eta$に対して$\lbrace \eta\rbrace ^{n-1}$-generically nefであり、$c_1(\mathcal E)$がnefであると仮定する。十分小さい正の$\varepsilon$について

<div>
$$
c_2(\mathcal E)\bigl(c_1(\mathcal E)+\varepsilon\lbrace \omega\rbrace \bigr)^{n-2}=0
$$
</div>

なら、$\mathcal E$はnefなベクトル束となり、$c_2(\mathcal E)=0$である。より正確には、ある$\varepsilon_0>0$が存在し、いずれかの$0<\varepsilon<\varepsilon_0$でこの等式が成り立てばよい。射影的な場合には、ある豊富な直線束$A$に対する$c_2(\mathcal E)A^{n-2}=0$から同じ結論を得る。

### 反標準束がnefな場合（Corollary 1.7）

$-K_X$がnefで$c_2(X)=0$なコンパクトKähler多様体では、接束$T_X$がnefになる。さらに有限エタール被覆$X'\to X$を取ると、$X'$はトーラスまたはトーラス上の$\mathbb P^1$束である。Introductionは、射影的な場合の既知の極端半直線を用いる証明と今回の方法を区別している。

## 証明の見取り図

Introductionが強調する枠組みは、generically nefな層のChern類条件から束のnef性へ進む判定と、Fujita分解を通じた平坦部分の分析である。標準束がnefなときの余接束のgeneric nef性が、Chern類の議論への出発点となる。飯高ファイブレーションについては、有限エタール被覆後のアーベル群スキームという既知の記述を用い、相対余接束の平坦性とモジュライ像の次元を結びつける。個々の証明や後続節の補題はここでは検証していない。

## 原論文との対応

- **Abstractページ:** [arXiv:2205.10613v2](https://arxiv.org/abs/2205.10613v2)
- **Introduction:** Section 1、pp. 2–5冒頭。
- **主結果:** Theorems 1.2–1.6、Corollary 1.7。Conjecture 1.1は一般予想である。
- **論文構成:** Introduction末尾と目次によれば、正値性の準備、abundance・構造定理、飯高ファイバーの変動、Chern類が消える層の分析へ進む。
- **確認バージョン:** v2。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
