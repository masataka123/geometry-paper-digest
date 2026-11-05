---
layout: paper
title: Bubbling of Kähler-Einstein metrics
title_ja: Kähler–Einstein計量のバブル木の有限段階停止
authors: Song Sun
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: We prove the finite step termination of bubble trees for singularity formation of polarized K\"ahler-Einstein metrics in the non-collapsing situation. We also raise several questions and conjectures in connection with algebraic geometry and Riemannian geometry.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- metric-limits
- singularities
- noncompact-kahler-geometry
- calabi-yau-geometry
arxiv_id: 2303.11309v2
arxiv_url: https://arxiv.org/abs/2303.11309v2
arxiv_submitted: '2023-03-20'
arxiv_updated: '2023-06-15'
summary: 非崩壊な偏極Kähler–Einstein計量列の特異点形成を、拡大極限であるバブルの列として調べる。体積密度の有限性と最小バブルの存在を示し、バブル木が次元と直径上界に依存する有限段階で停止することを導く。
abstract_en: ''
summary_en: A tangent cone describes the limiting singularity but loses information about the scales at which it forms. This paper studies that missing information through rescalings of polarized Kähler–Einstein manifolds. Algebraic structure constrains the possible volume densities and allows a first nonconical bubble to be detected. Repeating the process gives finite termination along the chosen sequence of base points.
abstract_ja: 直径が一様に有界な偏極Kähler–Einstein計量列について、特異極限の周りをさまざまな尺度で拡大して得られるバブルを調べる。バブルの基点での体積密度が有限個の値しか取らないことと、極限の接錐に漸近する最小の非錐的バブルの存在を証明する。これらから、部分列を取った後のバブル極限は尺度による同一視のもとで有限の順序付き列となり、その長さにも一様な上界があることを導く。代数幾何学的解釈や一般Riemann幾何への拡張は問題として残される。
abstract_source_url: https://arxiv.org/abs/2303.11309v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2303.11309v2](https://arxiv.org/abs/2303.11309v2)
- **著者:** Song Sun
- **初回投稿日:** 2023-03-20
- **最終更新日:** 2023-06-15
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler–Einstein計量の列が特異空間へ収束するとき、極限の接錐は特異点の一次近似を与える。しかしそれだけでは、特異点がどの尺度で形成されたかは分からない。本論文は元の計量列をさまざまな倍率で拡大し、途中に現れるバブルを通じて形成過程を調べる。

著者はまず、バブルの基点での体積密度が有限個の値しか取らないことを証明する。さらに極限の接錐に漸近する最初の非錐的バブルを取り出し、その下の尺度では接錐だけが見えることを示す。

これらから、基点列に沿うバブルの段階は無限に続かず、適切な部分列を取ると有限の順序付き列として記述できる。段階数の上界も次元と直径上界で制御される。証明では解析的極限が持つ代数構造が本質的であり、同じ主張を一般のRiemann幾何で得ることはここで証明されていない。

## 背景と問題設定

偏極Kähler–Einstein多様体の列$(X\_j,L\_j,\omega\_j,p\_j)$について

$$
\omega\_j\in2\pi c\_1(L\_j),\qquad
\operatorname{Ric}(\omega\_j)=c\_j\omega\_j,
\qquad c\_j\in\lbrace 1,0,-1\rbrace ,
\qquad\operatorname{diam}(X\_j,\omega\_j)\leq D
$$

を仮定する。$c\_j=0$の場合は$K\_{X\_j}$の正則自明性も仮定する。この設定の非崩壊条件は$\operatorname{Vol}(B(p\_j,1))\geq\kappa>0$で表される。収束部分列を固定し、その極限の基点$p\_\infty$は特異点とする。

倍率$\lambda\_j\geq1$で拡大した$(X\_j,\lambda\_j\omega\_j,p\_j)$の部分列極限をバブルと呼ぶ。発散する倍率から得られる非コンパクト極限$Z$は弱いCalabi–Yau計量を持つアフィン多様体となり、基点での接錐$C\_0(Z)$と無限遠の漸近錐$C\_\infty(Z)$を持つ。ここで扱う収束には複素構造の情報も含まれ、単なる距離空間としての収束より強い。

Euclid空間の球を$B\_0(r)$とし、体積密度を

$$
\operatorname{Vol}\_0(Z)=\lim\_{r\to0}\frac{\operatorname{Vol}(B(p\_Z,r))}{\operatorname{Vol}(B\_0(r))},
\qquad
\operatorname{Vol}\_\infty(Z)=\lim\_{r\to\infty}\frac{\operatorname{Vol}(B(p\_Z,r))}{\operatorname{Vol}(B\_0(r))}
$$

とする。後者は非コンパクトなバブルについて定義する。Bishop–Gromov不等式により

$$
\operatorname{Vol}\_0(Z)\geq\operatorname{Vol}\_\infty(Z)\geq\operatorname{Vol}\_0(X\_\infty)
$$

であり、最初の等号は$Z$が基点を頂点とする距離錐の場合に限る。

## 主結果

### 体積密度の有限性（Theorem 1.7）

基点を保つ正則等長写像で同一視したバブルの集合を$\mathcal R$とすると

$$
\mathcal V(\mathcal R)=\lbrace \operatorname{Vol}\_0(Z):Z\in\mathcal R\rbrace
$$

は有限集合であり、その要素数は次元$n$と直径上界$D$だけに依存する定数$V(n,D)$で抑えられる。従来知られていた各密度の代数性だけから、この有限性が直ちに従うわけではない。無限に細かな尺度の解析を離散的な情報で制御する点が核心である。

### 最小バブルの存在（Theorem 1.11）

極限の接錐$C\_0(X\_\infty)$に漸近し、それ自身は錐ではないバブルを最小バブルと呼ぶ。そのようなバブルを与える尺度列$\lambda\_j\to\infty$が存在する。さらに

$$
\lambda'\_j\to\infty,\qquad \frac{\lambda'\_j}{\lambda\_j}\to0
$$

なら、$(X\_j,\lambda'\_j\omega\_j,p\_j)$は$C\_0(X\_\infty)$へ収束する。したがって最小バブルは、より小さい拡大率では接錐しか見えない領域から、非錐的な形が初めて現れる尺度を捉える。この存在主張を、最小バブルの代数的同型型が常に一意という主張へ読み替えない。

### バブル木の有限段階停止（Corollary 1.13）

任意の部分列からさらに部分列を取ると、尺度で同一視したバブル極限は有限の順序付き列$(Z\_\alpha,q\_\alpha)\_{\alpha=1}^{2k}$になる。始点と終点は

$$
(Z\_1,q\_1)=(X\_\infty,p\_\infty),\qquad
(Z\_{2k},q\_{2k})=(\mathbb C^n,0)
$$

であり、偶数番目は錐である。隣接する段階は、添字が定義される範囲で

$$
C\_0(Z\_{2\alpha-1})=Z\_{2\alpha}=C\_\infty(Z\_{2\alpha+1})
$$

とつながる。$k$は$n,D$だけに依存する整数で一様に抑えられる。これは固定した収束列と基点列に沿う記述であり、極限空間の特異点だけからすべてのバブルが決まるとは述べていない。

## 証明の見取り図

体積密度の有限性には、Kähler–Einstein極限が持つアフィン代数構造との関係を使う。次に極限の接錐を含む錐の連続族が出現する可能性を排除し、最初の非錐的な尺度を取り出す。この段階は接錐の一意性の証明を拡張する性格を持つ。非錐的バブルにおける体積密度の厳密な変化と有限性を組み合わせることで、同じ操作を無限に繰り返すことができなくなり、有限停止へ至る。最小バブルの代数幾何学的な意味やRiemann幾何への一般化は、後続節で問いとして議論される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2303.11309v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/2303.11309v2) — Section 1, pp. 1–4（Section 2の直前まで）
- **Introduction中で言及された主要結果:** Theorems 1.7, 1.11; Corollary 1.13
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2303.11309v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
