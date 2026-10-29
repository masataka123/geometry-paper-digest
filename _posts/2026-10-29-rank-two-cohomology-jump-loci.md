---
layout: paper
title: Rank two cohomology jump loci on projective varieties
title_ja: 射影多様体の階数2コホモロジージャンプ軌跡の構造
authors: Quoc-Anh Tran
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $X$ be a smooth connected complex projective variety. We give a structure theorem for irreducible components of the reduced rank-two cohomology jump loci on $X$. More precisely, for such a component $Z$, if the general point of $Z$ is projectively virtually abelian or projectively rigid, then either $Z$ is a symmetric square of an algebraic torus, or a quotient of a torus by an involution, or its normalization $Z^{\nu}$ is a torus. If the general point is neither, then either $Z^{\nu}$ is a torus, or an \'{e}tale quotient of $Q^{\nu} \times T$ where $Q$ is a fixed-determinant, fixed-inertia component of the character variety of some DM-curve.
topic: algebraic-geometry
tags:
- hodge-theory
- higgs-nonabelian-hodge
- moduli
- fundamental-groups
arxiv_id: 2610.36251v1
arxiv_url: https://arxiv.org/abs/2610.36251
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: 滑らかな複素射影多様体の階数2局所系に対するコホモロジージャンプ軌跡を大域的に分類する。一般点の射影モノドロミー型に応じ、正規化をトーラスやDeligne–Mumford曲線の指標多様体との積のエタール商で記述する。
abstract_en: Let $X$ be a smooth connected complex projective variety. We give a structure theorem for irreducible components of the reduced rank-two cohomology jump loci on $X$. More precisely, for such a component $Z$, if the general point of $Z$ is projectively virtually abelian or projectively rigid, then either $Z$ is a symmetric square of an algebraic torus, or a quotient of a torus by an involution, or its normalization $Z^{\nu}$ is a torus. If the general point is neither, then either $Z^{\nu}$ is a torus, or an \'{e}tale quotient of $Q^{\nu} \times T$ where $Q$ is a fixed-determinant, fixed-inertia component of the character variety of some DM-curve.
summary_en: ''
abstract_ja: 階数2局所系のコホモロジーが増大する軌跡の既約成分について、正規化を用いた構造定理を与える。一般点が可約、射影的二面体型、有限型、稠密剛性型の場合にはトーラスの対称積や商などが現れる。稠密非剛性型では、正規化はトーラス、または適切なDeligne–Mumford曲線上の行列式と慣性を固定した指標多様体の成分とトーラスとの積のエタール商になる。
abstract_source_url: https://arxiv.org/abs/2610.36251
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.36251v1](https://arxiv.org/abs/2610.36251)
- **著者:** Quoc-Anh Tran
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

局所系$\mathcal V$を動かしたとき、コホモロジー$H^i(X,\mathcal V)$の次元が特定の値以上になる場所をジャンプ軌跡という。階数1ではトーラスの平行移動で記述する強い構造定理が知られる一方、高階数での大域的な形は十分に分かっていなかった。

本論文は滑らかな連結複素射影多様体の階数2を扱い、既約成分の正規化を分類する。可約性や射影モノドロミーの型に応じてトーラス由来の成分を分け、真に非可換な場合には適切なDeligne–Mumford曲線へ因子化する。

分類を支えるのが、ジャンプ軌跡とその正規化の完備局所環に構成される混合Hodge構造である。これを使って有限写像の分岐を排除し、単なる局所的な形ではなくエタール商として大域構造を記述する。

## 背景と問題設定

枠付き局所系の空間は$R\_B(X,x,r)=\operatorname{Hom}(\pi\_1(X,x),\operatorname{GL}\_r)$であり、そのGIT商を$M\_B(X,r)$とする。枠付きのジャンプ軌跡は

$$
\Sigma\_k^i(X,x,r)=\lbrace \mathcal V:\dim H^i(X,\mathcal V)\geq k\rbrace
$$

である。本論文の分類対象はその商空間への被約像の既約成分である。元の表現空間、商スタック、良いモジュライ空間を区別することが必要で、結論の多くは成分そのものではなく正規化$Z^\nu$について述べられる。

## 主結果

### 階数2の分類（Theorem 1.1、Theorem 1.6）

被約ジャンプ軌跡の既約成分$Z$は、一般点の射影表現の型によって次の形を取る。可約型では$Z\simeq\operatorname{Sym}^2(N)$、または$Z^\nu\simeq N\_1\times N\_2$となり、$N,N\_1,N\_2$は平行移動されたトーラスである。既約で射影的二面体型なら$Z^\nu$がトーラスとなるか、$Z$がトーラスの対合による商となる。射影的有限型と射影的稠密剛性型では$Z^\nu$がトーラスになる。

射影的稠密非剛性型では、$Z^\nu$はトーラス、または

$$
Z^\nu\simeq (Q^\nu\times T)/H
$$

というエタール商である。$T$は代数的トーラス、$Q$は固有双曲的Deligne–Mumford曲線上で行列式と慣性を固定した指標多様体の成分である。階数1のトーラス構造に、曲線由来の非可換な因子が加わることが新しい大域像となる。

### ジャンプ軌跡のHodge構造（Theorem 1.2）

任意の階数$r$で、枠付きジャンプ軌跡はHodge部分多様体であり、半単純化で閉じている。その被約軌跡と各既約成分はabsolute $\mathbb Q$-closedでもある。混合Hodge構造の変動を与える点では、完備局所環にpro混合Hodge代数の構造が得られる。Introductionは関連する先行構成との一致までは分かっていないと述べる。

### 正規化へのHodge構造の持ち上げ（Theorem 1.3）

Hodge部分多様体の良いモジュライ空間へのスキーム論的像$Z$を考える。Hodge構造の変動に由来する点$\mathcal V$とその上の$z\in Z^\nu$では

$$
\widehat{\mathcal O}\_{Z,\mathcal V}\longrightarrow\widehat{\mathcal O}\_{Z^\nu,z}
$$

がpro混合Hodge代数の射となる。正規化で失われがちな局所構造にもHodge理論を適用できることが、分類での分岐排除に使われる。

### 非可換成分の有限写像（Theorem 1.12）

行列式を固定する有限被覆と階数1の捩りを分離すると、関連成分$C$を$Q\times T$内で調べられる。このとき$C=Q\times T$、$C=\lbrace \mathcal V\rbrace \times T$、または正規化からの射$C^\nu\to T$がエタール、のいずれかとなる。これが上の分類の非剛性部分につながる。

## 証明の見取り図

一般点の表現を五つの型に分け、トーラスで記述できる型を先に扱う。残る型にはCorlette–Simpsonに沿う因子化を用い、Deligne–Mumford曲線上の捩ったジャンプ問題へ移す。一般有限な場合は不変Grassmannianの構成で有限性を得る。もし正規化後も分岐があれば、適切なユニタリ局所系上で完備局所環の混合Hodge構造と両立しない状況を生む、というのがIntroductionの最後の段階である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.36251)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.36251v1) — Section 1, pp. 2–5（謝辞を含むIntroduction）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3、1.6、1.12、Corollary 1.13
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.36251v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
