---
layout: paper
title: Oka manifolds are ubiquitous
title_ja: 有理連結多様体・Fano多様体と超曲面補集合のOka性
authors: Sicheng An, Bin Guo, Peng-Chao Wang, Song-Yan Xie
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: |-
  We prove that every smooth complex projective rationally connected manifold, and hence every smooth complex Fano manifold, is Oka by applying the analytic criteria of Du, Guo, Wang, and Xie. We also establish the Oka property for the smooth Calabi--Yau threefolds in Schoen's construction: fiber products over the projective line of relatively minimal rational elliptic surfaces with sections and disjoint sets of singular values. For a smooth hypersurface of degree $d$ in $\PP^n$, its complement is Oka, equivalently holomorphically elliptic, if and only if $d\le n+1$. A connected smooth projective variety with reduced simple normal crossings boundary has Oka complement if it admits a nonconstant rational curve whose inverse image of the boundary consists of at most one point and whose pulled-back logarithmic tangent bundle is ample. The main positive results follow from holomorphic families of entire curves constructed by deformations of rational curves, holomorphic actions along genus-one fibers, and successive polar equations. The obstruction in higher degree is due to Carlson and Griffiths.
topic: several-complex-variables
tags:
- oka-theory
- fano-varieties
- calabi-yau-geometry
- positivity
arxiv_id: 2610.10493v1
arxiv_url: https://arxiv.org/abs/2610.10493v1
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: |-
  滑らかな複素射影有理連結多様体、したがってFano多様体がOkaであることを示し、Schoen型Calabi–Yau三次元多様体にも例を広げる。滑らかな射影超曲面の補集合については、次数d≤n+1がOka性および正則楕円性と同値であるとする。証明は整曲線族からOka性を導く別論文の解析的判定を用いる。
abstract_en: ''
summary_en: |-
  The paper uses families of entire curves to establish flexibility properties for several classes of algebraic manifolds. Its first result gives the full Oka property for smooth projective rationally connected manifolds, including Fano manifolds. It also treats smooth Schoen fiber products and determines an exact degree range for complements of smooth projective hypersurfaces. A logarithmic tangent-bundle criterion supplies further complements, with the analytic passage to the Oka property relying on results of Du, Guo, Wang, and Xie.
abstract_ja: |-
  Du・Guo・Wang・Xieの解析的判定を用いて、滑らかな複素射影有理連結多様体とFano多様体のOka性を証明する。特異値集合が交わらない二つの切断付き有理楕円曲面のファイバー積であるSchoen型Calabi–Yau三次元多様体もOkaとなる。また、P^n内の次数dの滑らかな超曲面の補集合がOkaであること、正則楕円的であること、d≤n+1であることの同値性を示す。対数接束が豊富になる有理曲線を用いた補集合の判定も得る。正の結果は有理曲線の変形、種数1ファイバー上の正則作用、逐次的なpolar方程式から得られ、高次数での障害にはCarlson–Griffithsの結果を用いる。
abstract_source_url: https://arxiv.org/abs/2610.10493v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.10493v1](https://arxiv.org/abs/2610.10493v1)
- **著者:** Sicheng An, Bin Guo, Peng-Chao Wang, Song-Yan Xie
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.CV（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka性は、Stein空間からの正則写像の存在・近似・補間に関する柔軟性を表す。射影多様体上に多数の有理曲線があることから、任意の次元のStein空間を始域とするこの性質を導けるかが、論文の出発点である。

著者らは、滑らかな複素射影有理連結多様体の完全なOka性を示す。Fano多様体は有理連結であるため、この結論の対象となる。さらに有理連結でない例として、特定のSchoen型Calabi–Yau三次元多様体のOka性も証明する。

非コンパクトな例では、射影空間内の滑らかな超曲面の補集合について次数による必要十分条件を与える。境界付きの一般的な射影多様体には、対数接束を用いた十分条件を用意する。これらの代数幾何的構成からOka性へ進む段階は、Du・Guo・Wang・Xieの別論文の解析的結果を入力としている。

## 背景と問題設定

有理連結とは、一般の二点が有理曲線で結ばれる性質である。Introductionでは、有理連結射影多様体上の稠密な整曲線の構成や、開Riemann面からの写像に関するOka-1性を先行結果として挙げる。今回の主張は、始域の有限次元を1に限らない完全なOka性である。

正則楕円性は、dominatingな正則sprayが存在する性質である。論文は超曲面補集合という特定のクラスについて、Oka性と正則楕円性の同値性を示すのであり、両概念を無条件に同義とはしていない。

## 主結果

### 有理連結・Fano多様体（Theorem 1.1）

すべての滑らかな複素射影有理連結多様体はOkaである。特に、滑らかな複素Fano多様体はOkaとなる。Introductionが述べる新規性は、有理曲線から整曲線を作るだけでなく、それを任意の有限次元のStein始域に対する近似性へ結びつける点にある。

### Schoen三次元多様体（Theorem 1.2）

$p_i:S_i\to\mathbb P^1$を、滑らかな射影有理曲面上の、連結ファイバーと切断を持つ相対極小楕円ファイブレーションとする。特異値集合$\Delta_1,\Delta_2$が交わらなければ、

<div>
$$
X=S_1\times_{\mathbb P^1}S_2
$$
</div>

は滑らかで連結・射影的・単連結な三次元多様体となり、$K_X\simeq\mathcal O_X$および$H^1(X,\mathcal O_X)=H^2(X,\mathcal O_X)=0$を満たす。このCalabi–Yau性は既知の部分である。

新しい部分として、ある正則写像$F:\mathbb C^3\to X$と稠密Zariski開集合$U$が存在し、$U\subset F(\mathbb C^3)$、かつすべての$z\in F^{-1}(U)$で$dF_z$が同型となる。さらに$X$はOkaである。任意のCalabi–Yau三次元多様体についての定理ではない。

### 超曲面補集合の次数判定（Theorem 1.3）

$n\ge1$、$D\subset\mathbb P^n$を次数$d\ge1$の滑らかな超曲面とする。このとき

<div>
$$
\mathbb P^n\setminus D\text{ が Oka}
\quad\Longleftrightarrow\quad
\mathbb P^n\setminus D\text{ が正則楕円的}
\quad\Longleftrightarrow\quad d\le n+1.
$$
</div>

境界となる次数$n+1$も含むため、例えば滑らかな四次曲面の$\mathbb P^3$内の補集合が対象になる。高次数での不成立にはCarlson–Griffithsの微分退化定理を用いる。

### 対数有理曲線による判定（Theorem 1.4）

$X$を連結な滑らかな複素射影多様体、$D$を被約単純正規交叉因子とする。非定数射$f:\mathbb P^1\to X$が

<div>
$$
f^{-1}(D)\subseteq\lbrace \infty\rbrace ,
\qquad f^\ast T_X(-\log D)\text{ が豊富}
$$
</div>

を満たせば、$X\setminus D$はOkaである。曲線が境界と会う点を高々一つに制限しつつ、対数接束の正値性で変形の自由度を確保する。

## 証明の見取り図

共通する解析的入力は、開集合$V\subset Y$上の整曲線族$h_j:V\times\mathbb C\to Y$を用意し、$h_j(y,0)=y$かつ$\partial_t h_j(y,0)$が$T_yY$を張ることからOka性を導く判定である。Introductionによれば、適切な解析的部分集合の外で構成することも許される。

有理連結の場合はvery freeな有理曲線を変形し、$\mathbb C\subset\mathbb P^1$へ制限する。Schoenの例では種数1ファイバーに沿う正則作用を合成する。超曲面補集合では、接触次数を指定した直線の族を逐次的なpolar方程式で作る。次数$n+1$では対数接束の行列式が自明となるため、Theorem 1.4の豊富性だけでは届かず、この別の構成が必要になる。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.10493v1](https://arxiv.org/abs/2610.10493v1)
- **Introduction:** Section 1、pp. 1–3。
- **主結果:** Theorems 1.1–1.4。
- **論文構成:** Section 2で解析的判定、Sections 3–6で幾何的構成、Section 7で追加の例を扱う。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
