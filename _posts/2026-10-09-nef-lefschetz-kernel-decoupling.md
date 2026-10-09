---
layout: paper
title: On the kernels of Lefschetz operators
title_ja: nef類のLefschetz作用素の核とその分解
authors: Jiajun Hu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the kernels of Lefschetz operators arising from complete intersections of nef classes. When the classes are semiample, we provide a complete characterization of mixed Lefschetz properties below a fixed degree -- all obstructions are detected by irreducible subvarieties of relevant codimensions. We further show that the kernels in the next degree range vanish off the diagonal, while on the diagonal they admit bases consisting of fundamental classes of irreducible subvarieties annihilated by the Lefschetz operator. We also establish a kernel decoupling theorem for nef classes on complex Lefschetz modules. As an application, we obtain a kernel characterization for supercritical collections of nef classes, thereby proving a conjecture of Shenfeld-van Handel and Hu-Xiao.
topic: algebraic-geometry
tags:
- hodge-theory
- positivity
- algebraic-cycles-enumerative
arxiv_id: 2610.12091v1
arxiv_url: https://arxiv.org/abs/2610.12091
arxiv_submitted: '2026-10-08'
arxiv_updated: '2026-10-08'
summary: semiample類によるLefschetz写像の単射性を、所定の余次元の部分多様体との交差で特徴付ける。さらに複数のnef類の積の核を部分和の冪の核へ分解し、supercriticalなnef類の組に対する核の幾何的記述とKhovanskii–Teissier不等式の等号条件を得る。
abstract_en: ''
summary_en: A nef class may lose the injectivity properties enjoyed by an ample class, and the failure can carry geometric information. Hu studies this failure degree by degree, first for semiample bundles and then in the abstract setting of Lefschetz modules. A kernel decomposition for products of nef classes leads to a description by prime divisors in the supercritical case. The resulting description also gives a geometric form of equality in intersection inequalities.
abstract_ja: 豊富類に対するLefschetz理論を、semiample類やnef類の積へ拡張する際に現れる核を調べる研究である。semiampleの場合には、低次数での単射性を部分多様体の基本類で検出し、次の次数では対角成分以外の核が消え、残る核が消滅する基本類で記述されることを示す。複素Lefschetz加群上では混合積の核を部分和の冪の核に分解する。この抽象的な結果を使い、supercriticalなnef類の組について素因子による核の特徴付けを導く。
abstract_source_url: https://arxiv.org/abs/2610.12091
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **原題:** On the kernels of Lefschetz operators
- **著者:** Jiajun Hu
- **arXiv:** [2610.12091v1](https://arxiv.org/abs/2610.12091)
- **初回投稿日 / 更新日:** 2026-10-08 / 2026-10-08
- **主分類:** math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)。著作権は原著者等の権利者に帰属する。

## 要約

豊富な類を掛けるLefschetz写像には強い同型性があるが、類をnef錐の境界へ動かすと核が現れる。この核を幾何的に理解できれば、単射性が失われる理由だけでなく、交差数不等式の等号条件も記述できる。

本論文は、まずsemiample線束について、指定された次数以下の単射性を、対応する余次元の既約部分多様体の基本類で検出する。さらに、その次の次数で残る核は対角成分に限られ、作用素によって消える基本類が基底を与えると示す。

複数の類の積にも同じ記述を拡張し、抽象的なLefschetz加群では積の核を部分和の冪の核へ分解する。これを任意のnef類へ適用することで、supercriticalな組に関するShenfeld–van HandelおよびHu–Xiaoの予想を解くとする。

## 背景と問題設定

<p>$X$ は複素数体上の次元 $n$ の滑らかな射影多様体とする。線束とその第一Chern類を同じ記号で表し、$\mathcal L^\alpha=\prod_{i=1}^mL_i^{\alpha_i}$、$L_I=\sum_{i\in I}L_i$ と書く。数値次元は $\operatorname{nd}_V(L)=\max\{r\mid L^r\cdot[V]\ne0\}$ である。</p>

<p>単一のsemiample類が $d$-lef below degree $l$ であるとは、$0\le k\le l-1$ のすべての余次元 $k$ の既約部分多様体 $V$ に対し $L^{d-2k}[V]\ne0$ であることをいう。以下の定理では、この条件の混合版を明示する。</p>

## 主結果

### 主定理1：単一類の低次数単射性（Theorem 1.2）

<p>$0\le2l-1\le d\le n$ とし、$L$ をsemiampleとする。上の部分多様体による条件は、$0\le k\le l-1$ での $L^{d-2k}:H^{k,k}(X)\to H^{d-k,d-k}(X)$ の単射性と同値であり、さらにすべての $p+q\le2l-2$ での</p>

<div>
$$
L^{d-p-q}:H^{p,q}(X)\longrightarrow H^{d-q,d-p}(X)
$$
</div>

<p>の単射性とも同値である。低い余次元の代数的サイクルだけで、指定範囲のすべてのHodge成分を判定できる。</p>

### 主定理2：次の次数の核（Theorem 1.3）

<p>$l\ge1$、$2l+1\le d\le n$ とし、$L$ が $d$-lef below degree $l$ とする。$2l-1\le p+q\le2l$ では、$(p,q)\ne(l,l)$ なら上の写像は単射である。対角成分には</p>

<div>
$$
\ker\bigl(L^{d-2l}:H^{l,l}(X)\to H^{d-l,d-l}(X)\bigr)
=\operatorname{span}_{\mathbb C}\{[V]\mid\operatorname{codim}_XV=l,\ V\text{ 既約},\ L^{d-2l}[V]=0\}
$$
</div>

<p>が成立し、右辺の基本類は線形独立である。したがって、核は抽象的なベクトル空間としてだけでなく、消える部分多様体の基本類で記述される。</p>

### 主定理3：混合積の単射性（Theorem 1.4）

<p>$0\le2l-1\le d\le n$、$1\le m\le d-2l+2$ とし、$L_1,\ldots,L_m$ をsemiampleとする。すべての $0\le k\le l-1$、余次元 $k$ の既約部分多様体 $V$、正整数多重指数 $\alpha$（$|\alpha|=d-2k$）に対する $\mathcal L^\alpha[V]\ne0$ は、対応する対角写像の単射性、および $p+q\le2l-2$ におけるすべての混合Lefschetz写像の単射性と同値である。</p>

<p>この条件を組の $d$-lef below degree $l$ と呼ぶ。部分多様体ごとに、次の数値条件でも表せる。</p>

<div>
$$
\operatorname{nd}_V(L_I)\ge |I|+d-m-2k
\quad(\varnothing\ne I\subseteq\{1,\ldots,m\}).
$$
</div>

### 主定理4：混合積の次の次数（Theorem 1.5）

<p>$l\ge1$、$2l+1\le d\le n$ とし、semiampleな組が上記のlefnessを満たすとする。$2l-1\le p+q\le2l$、$|\alpha|=d-p-q$ では、対角成分以外の混合Lefschetz写像は単射となる。対角成分の核は</p>

<div>
$$
\ker\mathcal L^\alpha\cap H^{l,l}(X)
=\operatorname{span}_{\mathbb C}\{[V]\mid\operatorname{codim}_XV=l,\ V\text{ 既約},\ \mathcal L^\alpha[V]=0\}
$$
</div>

<p>であり、ここでも右辺の類は線形独立になる。</p>

### 主定理5：Lefschetz加群上の判定（Theorem 1.8）

<p>次数 $n$ の複素Lefschetz加群 $M$ 上で、$2l-1\le d\le n$、$1\le m\le d-2l+2$ とする。nef類の組について、すべての $k\le l-1$ と正整数多重指数 $|\alpha|=d-2k$ で $\mathcal L^\alpha:M^k\to M^{d-k}$ が単射であることは、すべての非空部分集合 $I$ に対し $L_I$ が $|I|+d-m$-lef below degree $l$ であることと同値である。</p>

Introductionは、実質的に同じ判定がLi–Zhengによって既に観察されていることも明記する。本論文では次の核の記述から自然に導く。

### 主定理6：核の分解（Theorem 1.9）

<p>$2l+1\le d\le n$、nef類の組が $d$-lef below degree $l$ であるとする。正整数多重指数 $|\alpha|=d-2l$、$\alpha_I=\sum_{i\in I}\alpha_i$ に対して、</p>

<div>
$$
\ker\mathcal L^\alpha\cap M^l
=\sum_{\varnothing\ne I\subseteq\{1,\ldots,m\}}
\bigl(\ker L_I^{\alpha_I}\cap M^l\bigr).
$$
</div>

<p>積の作用素の核を、部分和という単一類の冪の核へ分解する公式である。semiampleに限らずnef類を扱える点が、その後の幾何的応用を支える。</p>

### 主定理7：supercriticalなnef類の組（Theorem 1.10）

<p>$\mathcal L=(L_1,\ldots,L_{n-2})$ をnef類の組とし、すべての非空 $I$ で $\operatorname{nd}_X(L_I)\ge|I|+2$ と仮定する。このsupercritical条件の下で、</p>

<div>
$$
\ker(L_1\cdots L_{n-2})\cap H^{1,1}(X,\mathbb R)
=\operatorname{span}_{\mathbb R}\{[D]\mid D\text{ は素因子},\ L_1\cdots L_{n-2}[D]=0\}.
$$
</div>

<p>semiampleの場合のCorollary 1.6を、任意のnef類へ拡張した結論である。</p>

### 交差数不等式の等号条件（Corollary 1.11）

<p>$A,B$ がnef、$1\le k\le n-1$、$\int_XA^kB^{n-k}>0$ とする。このとき</p>

<div>
$$
\left(\int_XA^kB^{n-k}\right)^2
=\left(\int_XA^{k-1}B^{n-k+1}\right)
\left(\int_XA^{k+1}B^{n-k-1}\right)
$$
</div>

<p>は、ある $c>0$ に対して $A-cB=\sum_Da_D[D]$ と表せることと同値である。係数 $a_D$ は実数で、和に現れる素因子は $A^{k-1}B^{n-k-1}[D]=0$ を満たす。等号が許す「比例からのずれ」を、交差によって検出されない素因子で説明する。</p>

## 証明の見取り図

単一のsemiample類では正の冪を取って基点自由にし、Kodaira写像に対する分解定理とperverse filtrationを調べる。これにより核を支える部分多様体の幾何を取り出す。

混合版には二つの方法がある。一つはlefnessを保つ一般の超曲面へ制限し、帰納法と単一類の核の記述で情報を元へ戻す方法である。もう一つはLefschetz加群の分解定理とHodge構造の退化におけるdescent・purityを用いる方法であり、後者が任意のnef類の核分解を可能にする。

## 原論文との対応

- **Abstractページ:** [2610.12091](https://arxiv.org/abs/2610.12091)
- **PDF:** [2610.12091v1](https://arxiv.org/pdf/2610.12091v1)
- **Introduction:** Section 1, pp. 1–6
- **主要結果:** Theorems 1.2–1.5, 1.8–1.10; Corollary 1.11（Theorem 1.1は先行研究）
- **確認バージョン:** 2610.12091v1
- **確認ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction。後続節の証明全体の精読・独立検証は行っていない。
