---
layout: paper
title: Fujita's Very Ampleness Conjecture for $\mathbb{P}^{n-1}$-Bundles over Curves
title_ja: 曲線上の射影束に対するFujitaのvery ampleness予想
authors: Kevin Dao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $\mathcal{E}$ be a vector bundle of rank $n\geq 2$ over a smooth projective curve $C$ over $\mathbb{C}$. We prove that $K_{\mathbb{P}_C(\mathcal{E})}+\mathcal{L}_1+\dots+\mathcal{L}_k$ is very ample for arbitrary ample line bundles $\mathcal{L}_i$ when $k\geq n+2$.
topic: algebraic-geometry
tags:
- positivity
- vector-bundles-sheaves
- stability
arxiv_id: 2611.09532v1
arxiv_url: https://arxiv.org/abs/2611.09532
arxiv_submitted: '2026-11-06'
arxiv_updated: '2026-11-06'
summary: 滑らかな曲線上の階数nのベクトル束の射影束について、標準束にn+2個以上の任意の豊富線束を掛けるとvery ampleになることを示す。同じ線束を繰り返す場合だけでなく混合形を扱い、既知の大域生成の境界を点と接方向の分離へ進める。
abstract_en: Let $\mathcal{E}$ be a vector bundle of rank $n\geq 2$ over a smooth projective curve $C$ over $\mathbb{C}$. We prove that $K_{\mathbb{P}_C(\mathcal{E})}+\mathcal{L}_1+\dots+\mathcal{L}_k$ is very ample for arbitrary ample line bundles $\mathcal{L}_i$ when $k\geq n+2$.
summary_en: ''
abstract_ja: 複素数体上の滑らかな射影連結曲線Cと階数n≥2のベクトル束Eに対し、射影束P_C(E)上の任意の豊富線束L₁,…,L_kを考える。k≥n+2なら、標準束とこれらのテンソル積はvery ampleである。すべてのL_iを等しく取ることで、この射影束に対するFujitaのvery ampleness予想を得る。
abstract_source_url: https://arxiv.org/abs/2611.09532
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.09532v1](https://arxiv.org/abs/2611.09532)
- **著者:** Kevin Dao
- **初回投稿日:** 2026-11-06
- **最終更新日:** 2026-11-06
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

豊富線束に標準束を足した随伴束が、何回のテンソル積で射影埋め込みを与えるかという問題はFujita予想の中心にある。大域生成では各点で消えない切断を確保すればよいが、very amplenessには異なる点と接方向の分離まで必要となる。

本論文は滑らかな曲線上の射影束でこの問題を解き、異なる豊富線束を混ぜた形でも次元に依存する予想通りの境界を得る。既存の研究で得られていた$n+1$個の豊富因子による大域生成に対し、$n+2$個で長さ2の部分スキームを分離する。

証明は曲線上のベクトル束の傾斜を使う。結論の適用範囲は曲線上の射影束であり、任意の滑らかな射影多様体に対するFujita予想全体を解いたという主張ではない。

## 背景と問題設定

$C$を複素数体上の滑らかな射影連結曲線、$E$を階数$n\geq2$のベクトル束、$X=\mathbb P\_C(E)$とする。$\dim X=n$であり、論文の射影束の規約では

$$
\omega\_X\simeq\mathcal O\_X(-n)\otimes\pi^\ast (\omega\_C\otimes\det E),
\qquad \pi\_\ast \mathcal O\_X(m)\simeq\operatorname{Sym}^mE\quad(m\geq0)
$$

となる。したがって射影束上の随伴束の切断問題を、底曲線上の対称冪の問題へ移せる。

先行研究のButler、Parkらの射影束の結果、およびChen–Küronya–Mustopa–Stixによるconvex Fujita数の研究が背景にある。

## 主結果

### 主定理（Theorem 1.1）

$X$上の任意の豊富線束$L\_1,\ldots,L\_k$について、

$$
k\geq n+2\quad\Longrightarrow\quad
\omega\_X\otimes L\_1\otimes\cdots\otimes L\_k\text{ はvery ample}
$$

である。線束を同一にする仮定も、それぞれが大域生成されるという仮定も置かない。$L\_1=\cdots=L\_k=L$とすれば、$\omega\_X\otimes L^{\otimes(n+2)}$がvery ampleとなり、このクラスの多様体でFujita予想が従う。

Remark 1.2は、Lefschetz原理によって代数閉な標数0の体へ結論を移せると述べる。正標数への拡張は主張されていない。

### 証明を支える数値的条件

Introductionの予備事項は、線束$\mathcal O\_X(a)\otimes\pi^\ast M$の豊富性を

$$
a>0,\qquad a\mu\_{\min}(E)+\deg M>0
$$

と特徴づける。ここで$\mu\_{\min}$はHarder–Narasimhanフィルトレーションの最小傾斜である。またvery amplenessは、任意の長さ高々2の部分スキーム$Z\subset X$について

$$
H^0(X,L)\longrightarrow H^0(Z,L\otimes\mathcal O\_Z)
$$

が全射となることで判定する。これらは本論文が参照する既知の道具であり、新定理とは区別される。

## 証明の見取り図

Introductionによれば、追加の要点はSection 2.1の2つの補題にある。長さ2の部分スキームを分離できないことを、対称冪に付随する収縮写像の階数条件へ移し、そこから傾斜の不等式を導く。曲線上の豊富性・大域生成の判定と組み合わせて失敗を排除する。収縮写像の具体的計算や補題の証明はIntroduction後にあるため、ここでは再構成しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.09532)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.09532v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1; Remark 1.2; Propositions 1.3–1.7
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.09532v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
