---
layout: paper
title: Categorical Torelli theorem for smooth Fano varieties
title_ja: 超平面切断の圏からFano多様体を復元するTorelli定理
authors: Xun Lin, Shizhuo Zhang
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $X$ be a smooth Fano variety and $H$ an ample line bundle with $-K_X=rH$ and $r\le\dim X-2$. We prove that the appropriately defined Kuznetsov component of $X$ with respect to $H$, together with its rotation functor, determines $(X,H)$ when $H$ is very ample, and more generally when $H$ is globally generated and the image of the morphism defined by $|H|$ has a hypersurface as projective dual. As a consequence we prove Perry's conjecture, which predicts that a smooth Fano variety $X$ is determined up to isomorphism by the orthogonal complement $\mathcal{O}_X^{\perp}$ of its structure sheaf in $\mathrm{D}^b(X)$, for all smooth Fano varieties of dimension at least three with very ample anticanonical bundle, and more generally with globally generated anticanonical bundle whose image has a hypersurface as dual. We also prove it when a multiple $-qK_X$ is very ample and the corresponding embedding is cut out by equations of degree at most $(\mathrm{dim} X-1)/q$. The idea is
  to read off $X$ from its hyperplane sections. We show that the Kuznetsov component with its rotation functor contains the residual categories of all hyperplane sections of $X$, singular ones included. The sections whose categories are not smooth form the projective dual of $X$, and classical projective duality recovers $X$. When $H$ is not very ample, the nodes of a single tangent hyperplane section, defined over a function field and detected by its singularity category, recover $X$ as a finite cover of its image. Applications include Fano hypersurfaces, all prime Fano threefolds of index one and genus at least three, cyclic covers of quadrics, Fano complete intersections and Gushel--Mukai varieties.
topic: algebraic-geometry
tags:
- fano-varieties
- singularities
arxiv_id: 2610.25428v1
arxiv_url: https://arxiv.org/abs/2610.25428
arxiv_submitted: '2026-10-18'
arxiv_updated: '2026-10-18'
summary: Kuznetsov成分と回転関手から超平面切断の圏を取り出し、適切な偏極条件の下で滑らかなFano多様体を復元する。構造層の直交圏だけによる復元についても、反標準系の大域生成性と射影双対の条件、または反標準倍数の定義方程式の次数条件の下でPerry予想を示す。
abstract_en: ''
summary_en: Reconstruction is approached by locating hyperplane-section categories inside a Fano variety’s residual category. Their singular members encode geometric data that can recover an embedding or a finite polarization map. The resulting theorems cover several substantial classes in Perry’s conjecture, with explicit hypotheses on the anticanonical system or on equations of an embedding.
abstract_ja: 導来圏全体ではなく、その例外対象を取り除いた部分がどこまでFano多様体を記憶するかを問う論文である。回転関手を備えたKuznetsov成分から特異なものを含む超平面切断を圏として復元し、射影双対と有限被覆の情報を通じて多様体に戻る。構造層の直交圏の場合には回転関手を別途指定する必要がなく、反標準偏極に関する広い条件下でPerry予想を証明する。
abstract_source_url: https://arxiv.org/abs/2610.25428
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.25428v1](https://arxiv.org/abs/2610.25428)
- **著者:** Xun Lin, Shizhuo Zhang
- **初回投稿日:** 2026-10-18
- **最終更新日:** 2026-10-18
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

滑らかなFano多様体は連接層の有界導来圏全体から復元できる。しかし構造層などの例外対象を取り除いた小さい圏だけで、元の多様体を特定できるかは別の問題である。本論文はその圏論的Torelli問題を、超平面切断の幾何へ移す。

偏極に対応するKuznetsov成分に回転関手を加えると、特異なものを含む超平面切断の圏を取り出せる。切断の特異性を圏の滑らかさで判定し、射影双対を復元する。偏極写像が埋め込みでなく有限被覆となる場合にも、接超平面切断の特異点から被覆の情報を読む。

構造層の直交圏では回転関手がSerre関手から決まるため、追加の指定が不要となる。これにより反標準束が非常に豊富な場合をはじめ、明示された条件下でPerry予想が成り立つ。ただし任意のFano多様体について予想全体を解決したという主張ではない。

## 背景と問題設定

複素数体上の滑らかな$n$次元Fano多様体$X$について、豊富な束$H$と正整数$r$で$-K\_X=rH$とする。対象となる圏は
$$
\operatorname{Ku}(X,H)=\langle\mathcal O\_X,\mathcal O\_X(H),\ldots,\mathcal O\_X((r-1)H)\rangle^\perp
$$
であり、回転関手を$R\_{X,H}=\pi\circ(-\otimes\mathcal O\_X(H))\circ i$とする。$i$は包含、$\pi$はその左随伴である。一般に回転関手との整合性を捨てることはできず、同値なKuznetsov成分を持つ非同型な三次四次元多様体が既に知られている。

$H=-K\_X$なら$r=1$で、圏は$\mathcal O\_X^\perp$となり、$R\_{X,H}=S^{-1}[n]$である。Perry予想は$\mathcal O\_X^\perp\simeq\mathcal O\_Y^\perp$から$X\simeq Y$が従うという主張である。

## 主結果

### 回転関手を備えた復元（Theorem 1.1）

$X,Y$を同じ次元$n$の滑らかなFano多様体とし、$-K\_X=rH\_X$、$-K\_Y=rH\_Y$、$r\leq n-2$を仮定する。両偏極は大域生成され、さらに両方が非常に豊富であるか、$|H\_X|$の像$Z\_{H\_X}$の射影双対が超曲面であるとする。このとき、回転関手と可換な同値
$$
\operatorname{Ku}(X,H\_X)\simeq\operatorname{Ku}(Y,H\_Y)
$$
から偏極多様体の同型$(X,H\_X)\simeq(Y,H\_Y)$が従う。非常に豊富な場合には双対が超曲面であるという追加条件は不要である。

ここで回転関手との可換性はenhanced functorとしての条件である。圏・自然変換のenhancementを保持するという論文の規約の下で述べられている。

### 構造層の直交圏による復元（Theorem 1.5・Corollary 1.6）

$X,Y$が次元3以上で、両方の反標準束が大域生成され、$X$の反標準像の射影双対が超曲面なら、
$$
\mathcal O\_X^\perp\simeq\mathcal O\_Y^\perp\quad\Longrightarrow\quad X\simeq Y
$$
となる。同型は反標準像の射影的同一視の上にある。特に両反標準束が非常に豊富ならこの結論が成り立つ。

この場合の同値は任意の完全な$\mathbb C$線形三角圏同値でよく、enhancementを追加仮定する必要はないとRemark 1.7で説明される。また、互いに完全直交する正階数の例外連接層の集まりの直交圏にも定理は拡張される。

### 定義方程式による別の復元条件（Theorem 1.8）

整数$q\geq1,\ell\geq2$に対して、$-qK\_X,-qK\_Y$が非常に豊富で、その埋め込みの斉次イデアルが次数$\ell$以下で生成され、
$$
q\ell\leq\dim X-1,\qquad q\ell\leq\dim Y-1
$$
なら、やはり構造層の直交圏の同値から同型が従う。これは$|-K\_X|$自体に基点がある場合も許す、前の定理とは異なる条件である。

復元はHochschild–Serre代数$\operatorname{HS}^{p,q}\_X=\operatorname{Hom}(\operatorname{id},S^q[p])$を用いて具体化される。$n=\dim X$、$V=\operatorname{HS}^{qn,-q}\_X$とおけば、
$$
X\simeq\operatorname{Proj}\left(\operatorname{Sym}V\big/\left(\ker\left(\operatorname{Sym}^mV\longrightarrow\operatorname{HS}^{qmn,-qm}\_X\right):2\leq m\leq\ell\right)\right).
$$
分母は括弧内の核で生成されるイデアルを意味する。圏が低次数の関係式を記憶し、その関係式で多様体全体を切り出せることが次数条件の役割である。

### 切断の圏を取り出す定理（Theorem 1.11）

$H$が豊富で$r\leq n-2$なら、$(\operatorname{Ku}(X,H),R\_{X,H})$は
$$
\mathbb P\operatorname{Hom}(\operatorname{id},R\_{X,H})\simeq|H|
$$
を通して線形系を定める。さらに各$D\in|H|$について、非被約・特異な場合も含め、その残余圏$\operatorname{Ku}(D,H)$を定める。$r=1$ではこれは$\operatorname{Perf}(D)$である。残余圏がhomologically smoothでない切断を取ると、特異切断の軌跡が得られる。

Corollary 1.10では超曲面、指数1で種数3以上のprime Fano三次元多様体、適切な完全交叉や巡回被覆などへ適用する。より小さいKuznetsov成分を使う場合には、回転関手や貼り合わせ対象を別途必要とする場合があり、「全ての残余圏だけで復元できる」と一括してはいけない。

## 証明の見取り図

Fourier–Mukai核の評価によって切断と自然変換を対応させ、非可換因子の一意性を使って各切断の圏を構成する。圏の滑らかさから特異切断を検出し、埋め込みの場合は射影双対の双対を取って$X$へ戻る。従来の安定対象のモジュライ、Jacobian環、Hodge理論を用いる個別の復元とは異なる経路である。

有限偏極写像では像の復元だけでは足りない。双対多様体の関数体上の一般接超平面を用い、その引き戻しの節点に対応する特異圏の局所成分とGalois作用から被覆の関数体を復元し、像の正規化で$X$を得る。

Theorem 1.8は別経路であり、Hochschild–Serre代数の積から定義方程式を読む。Introduction末尾の今後の研究に記された他の復元問題は、本論文の証明済み主張とは区別される。

## 原論文との対応

- **Abstractページ:** [Categorical Torelli theorem for smooth Fano varieties](https://arxiv.org/abs/2610.25428)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.25428v1) — Section 1, pp. 1–9
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.5, 1.8, 1.11; Corollaries 1.6, 1.10; Conjecture 1.4は一般形では予想
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.25428v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source\_scope:** Abstract and Introduction
