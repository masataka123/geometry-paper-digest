---
layout: paper
title: Non-abelian Hodge correspondence for semistable parabolic connections on curves in positive characteristic
title_ja: 正標数曲線上の半安定放物接続と非可換Hodge対応
authors: Shiyu Shen
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $C$ be a smooth projective curve over an algebraically closed field $k$ of characteristic $p>0$. We establish a non-abelian Hodge correspondence between semistable parabolic connections on $C$ and semistable parabolic Higgs bundles on its Frobenius twist $C'$, allowing arbitrary prescribed residue eigenvalues, parabolic weights and filtration types. The relationship between the parabolic weights and residue eigenvalues on the two sides is encoded in a table analogous to Simpson's table. We obtain this result by extending the notion of "very good regular connections" to incorporate a residue-dependent degree condition, and by developing a Cartier descent formalism for parabolic connections. Working with filtered sheaves, we obtain a particularly clean description of this Cartier descent formalism that potentially extends to higher dimensional varieties.
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- stability
- positive-characteristic
- vector-bundles-sheaves
- moduli
arxiv_id: 2611.18317v1
arxiv_url: https://arxiv.org/abs/2611.18317
arxiv_submitted: '2026-11-13'
arxiv_updated: '2026-11-13'
summary: 正標数の滑らかな射影曲線上で、任意の留数固有値と放物重みを許す半安定放物接続とHiggs束の対応を構成する。Picard torsorによるねじれを伴う対応は放物次数を標数倍に移し、標数と階数の大小条件を課さない。filtered sheafを用いたCartier降下の明示的な記述も与える。
abstract_en: Let $C$ be a smooth projective curve over an algebraically closed field $k$ of characteristic $p>0$. We establish a non-abelian Hodge correspondence between semistable parabolic connections on $C$ and semistable parabolic Higgs bundles on its Frobenius twist $C'$, allowing arbitrary prescribed residue eigenvalues, parabolic weights and filtration types. The relationship between the parabolic weights and residue eigenvalues on the two sides is encoded in a table analogous to Simpson's table. We obtain this result by extending the notion of "very good regular connections" to incorporate a residue-dependent degree condition, and by developing a Cartier descent formalism for parabolic connections. Working with filtered sheaves, we obtain a particularly clean description of this Cartier descent formalism that potentially extends to higher dimensional varieties.
summary_en: ''
abstract_ja: 代数閉体上の滑らかな射影曲線とそのFrobenius twistの間で、半安定な放物接続と半安定な放物Higgs束を対応させる。留数固有値・重み・フィルトレーション型を任意に指定でき、両側のデータはArtin–Schreier写像を含む表で関係づけられる。留数依存の次数条件を持つvery good接続のtorsorを使って半安定性を保ち、放物Cartier降下をfiltered sheafの水平切断で表す。高次元への拡張は将来の課題として述べられる。
abstract_source_url: https://arxiv.org/abs/2611.18317
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.18317v1](https://arxiv.org/abs/2611.18317)
- **著者:** Shiyu Shen
- **初回投稿日:** 2026-11-13
- **最終更新日:** 2026-11-13
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

非可換Hodge対応は、接続とHiggs束という異なる記述をつなぐ。正標数ではFrobeniusと $p$-曲率が重要な役割を果たし、特異点での留数を任意に許すには放物構造を組み込む必要がある。本論文は曲線上で、留数固有値・放物重み・フィルトレーション型を指定した対応を構成する。

主要な点は、対応が半安定性を保ち、標数 $p$ が階数より大きいという制限を必要としないことである。ただし両モジュライが無条件に直接同型となるのではなく、スペクトル曲線のPicard stackに対応するtorsorによるねじれを伴う。また、Higgs側の放物次数 $d$ は接続側では $pd$ へ移る。

さらに、零 $p$-曲率を持つ放物接続に対するCartier降下を整備する。filtered sheafで書くと、適切な段階の水平切断をFrobeniusで押し出すという簡潔な式になる。この記述は高次元への拡張を示唆するが、本論文の証明された主対象は曲線である。

## 背景と問題設定

$k$ を標数 $p>0$ の代数閉体、$C$ を滑らかな射影曲線、$C'$ をそのFrobenius twistとする。Introductionでは標点を一つ $q\in C$ とし、一般の被約因子にも拡張できると説明する。

接続側の留数固有値 $b$ と重み $\beta\in[0,1)$ に対し、Higgs側のデータは

$$
a=b^p-b,\qquad \alpha=\frac{\beta-\nu(b)}p
$$

で対応する。$\nu:k\to\lbrace -p+1,\ldots,-1,0\rbrace $ は、Artin–Schreier写像の各ファイバーへの制限が全単射となるように固定する写像である。固有値の重複を含めて各固有値に重みを割り当てるデータを $\mathbf a\mapsto\alpha$ と書く。

## 主結果

### 主定理1（Theorem 1.1）：半安定性を保つtorsor付き対応

上の表で関係づけられた割当てについて、共通のHitchin基底 $A\_{\mathbf a}$ 上で

$$
\mathcal H^{\mathrm{vg}}\_{\mathbf a}
\times^{\mathcal P^o\_{\mathbf a}}\_{A\_{\mathbf a}}
\operatorname{Higgs}^{\mathbf a\mapsto\alpha}(C')
\simeq\operatorname{Conn}^{\mathbf b\mapsto\beta}(C)
$$

というstackの同型がある。$\mathcal P^o\_{\mathbf a}$ はスペクトル曲線の各整成分上で次数零の直線束を表すPicard stackであり、$\mathcal H^{\mathrm{vg}}\_{\mathbf a}$ はvery good接続のtorsorである。上付きの群stackを伴う積は、その作用によるねじれを組み込んだ積を表す。

任意の実数 $d$ について同型は半安定部分へ制限され、

$$
\mathcal H^{\mathrm{vg}}\_{\mathbf a}
\times^{\mathcal P^o\_{\mathbf a}}\_{A\_{\mathbf a}}
\operatorname{Higgs}^{\mathbf a\mapsto\alpha,\mathrm{ss}}(C',d)
\simeq\operatorname{Conn}^{\mathbf b\mapsto\beta,\mathrm{ss}}(C,pd)
$$

となる。指定する接続の留数列そのものにregularityを課さず、$p$ と階数の大小制限も課さない。

### Cartier降下（Proposition 1.2）

$\tau$ を $\mathbb F\_p$ の元からなる留数固有値列とする。重みの割当て $\tau\mapsto\beta$ に対し、零 $p$-曲率の放物接続のstackは

$$
\operatorname{Conn}^{0}\_{\tau\mapsto\beta}(C)
\simeq\operatorname{Bun}\_{\alpha}(C',m')
$$

となる。右辺の重み $\alpha$ とフィルトレーション型 $m'$ は、対応表を通じて左辺のデータから決まる。任意の重みと型を独立に選ぶ同型ではない。

### filtered sheafによる式（Theorem 1.3）

filtered connection $E=(\lbrace E\_x\rbrace \_{x\in\mathbb R},\nabla\_E)$ に対応するfiltered sheafは

$$
F\_x=(\operatorname{Fr}\_C)\_\ast
\ker\left(\nabla\_E:E\_{px}\longrightarrow E\_{px}\otimes\omega\_C(q)\right)
$$

で与えられる。$\operatorname{Fr}\_C:C\to C'$ は相対Frobeniusである。Introductionは逆構成をTheorem 6.6で与えると述べている。この式は留数と重みの選択を一度に扱い、root stackやparahoric群スキームを用いない記述となる。

## 証明の見取り図

正標数で微分作用素の代数が持つAzumaya構造とスペクトル曲線上の分裂が背景にある。まずregularな対数接続の局所構成を改め、Hitchin基底上への全射性に必要だった標数制限を外す。次に留数に依存する次数条件をvery good接続へ加え、Picard torsorを構成して半安定性を対応させる。

Cartier降下の局所標準形にはLagrange補間多項式を使う。さらに放物束とfiltered sheafの対応へ移すことで、水平切断による上の式を得る。高次元版については将来調べる方針として示されており、曲線上の結果と区別する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.18317)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.18317v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3；Proposition 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.18317v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
